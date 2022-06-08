import React from "react";
import {
  Header as ShellHeader,
  HeaderName,
  HeaderGlobalBar,
  Button,
} from "carbon-components-react";
import { Email20, ArrowRight20 } from "@carbon/icons-react";

const CustomHeader = ({}) => {
  return (
    <ShellHeader aria-label="Header">
      <HeaderName href="#" prefix="IBM">
        Deep Search
      </HeaderName>

      <HeaderGlobalBar>
        <Button
          kind="secondary"
          renderIcon={Email20}
          href="mailto:deepsearch-core@zurich.ibm.com"
        >
          Contact us
        </Button>

        <Button
          renderIcon={ArrowRight20}
          href="https://deepsearch-experience.res.ibm.com"
        >
          Try Deep Search
        </Button>
      </HeaderGlobalBar>
    </ShellHeader>
  );
};

export default CustomHeader;
