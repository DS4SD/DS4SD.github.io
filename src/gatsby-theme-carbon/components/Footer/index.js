import React from "react";
import Footer from "gatsby-theme-carbon/src/components/Footer";

const Content = ({ buildTime }) => (
  <>
    <p>
      Do you have questions?
      <br />
      <a href="mailto:deepsearch-core@zurich.ibm.com">Email</a> us or discuss at{" "}
      <a href="https://github.com/DS4SD/deepsearch-toolkit/discussions">GitHub</a>.
    </p>

    <p>
      Last updated {buildTime} <br />
      Copyright © 2022 IBM
    </p>
  </>
);

const links = {
  firstCol: [
    { href: "https://ibm.com/privacy", linkText: "Privacy" },
    { href: "https://www.ibm.com/legal", linkText: "Terms of use" },
    { href: "https://ibm.com", linkText: "IBM.com" },
  ]
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
