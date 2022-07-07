import React, { useEffect, useState } from "react";
import cx from "classnames";
import * as styles from "./PageHeader.module.scss";

const documentsConvertedUrl =
  "https://dp-prod-deepsearch-experience.s3.us-south.cloud-object-storage.appdomain.cloud/usage_stats/1234567890abcdefghijklmnopqrstvwyz123456/conversion_stats.json";

const CustomPageHeader = ({ title, theme, tabs = [] }) => {
  const isHomePage = title.length === 0;

  const [documentsConverted, setDocumentsConverted] = useState();

  // Update converted documents each minute.
  useEffect(() => {
    let interval;

    if (isHomePage) {
      interval = setInterval(updateDocumentsConverted, 60000);
      updateDocumentsConverted();
    }

    function updateDocumentsConverted() {
      try {
        fetch(documentsConvertedUrl)
          .then((response) => response.json())
          .then(({ inspector_transaction_count }) =>
            setDocumentsConverted(inspector_transaction_count)
          );
      } catch (ex) {
        console.error("Failed to fetch converted documents:", ex);
      }
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={cx(styles.pageHeader, {
        [styles.withTabs]: tabs.length,
        [styles.darkMode]: theme === "dark",
      })}
    >
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-lg-8">
            <h1 id="page-title" className={styles.text}>
              {isHomePage ? "Deep Search" : title}
            </h1>
          </div>

          {documentsConverted > 0 && (
            <div className={`bx--col-lg-4 ${styles.documentCounter}`}>
              <span className={styles.documentCount}>
                {documentsConverted.toLocaleString()}
              </span>
              <span>live inspected documents</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomPageHeader;
