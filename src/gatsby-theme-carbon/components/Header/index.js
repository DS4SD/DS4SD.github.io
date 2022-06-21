import React, { useState } from "react";
import {
  Header as ShellHeader,
  HeaderMenuButton,
  HeaderName,
  HeaderGlobalBar,
  Button,
} from "carbon-components-react";
import { Email20, ArrowRight20 } from "@carbon/icons-react";
import LeftNav from "./LeftNav";
import * as styles from "./styles.module.scss";

const CustomHeader = () => {
  const [navExpanded, setNavExpanded] = useState(false);

  return (
    <ShellHeader aria-label="Header">
      <HeaderMenuButton
        aria-label="Open navigation"
        onClick={() => setNavExpanded(!navExpanded)}
        isActive={navExpanded}
      />

      <HeaderName prefix="IBM">Deep Search</HeaderName>

      <HeaderGlobalBar>
        <Button
          className={styles.navButton}
          kind="secondary"
          renderIcon={Email20}
          href="mailto:deepsearch-core@zurich.ibm.com"
        >
          <span>Contact us</span>
        </Button>

        <Button
          className={styles.navButton}
          renderIcon={ArrowRight20}
          href="https://deepsearch-experience.res.ibm.com"
        >
          <span>Try Deep Search</span>
        </Button>
      </HeaderGlobalBar>

      <LeftNav expanded={navExpanded} />
    </ShellHeader>
  );
};

export default CustomHeader;
