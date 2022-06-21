import React from "react";
import { Link } from "gatsby";
import { Location, navigate } from "@reach/router";
import cx from "classnames";

import { SideNavLink } from "carbon-components-react";

import * as styles from "./LeftNav.module.scss";

const LeftNavItem = (props) => {
  const { title, path } = props;

  const handleClick = (event, to) => {
    event.preventDefault();
    navigate(to);
  };

  return (
    <Location>
      {({ location }) => {
        const isActive = path.split("/")[1] === location.pathname.split("/")[1];

        return (
          <SideNavLink
            onClick={(e) => handleClick(e, path)}
            icon={<span>dummy icon</span>}
            element={Link}
            className={cx({
              [styles.currentItem]: isActive,
            })}
            isActive={isActive}
            to={path}
          >
            {title}
          </SideNavLink>
        );
      }}
    </Location>
  );
};

export default LeftNavItem;
