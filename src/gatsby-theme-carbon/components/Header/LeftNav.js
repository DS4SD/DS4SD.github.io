import React from "react";
import { SideNav, SideNavItems } from "carbon-components-react";

import LeftNavItem from "./LeftNavItem";
import LeftNavResourceLinks from "./ResourceLinks";

import * as styles from "./LeftNav.module.scss";

// Side navigation items are defined here, separate from the central navigation.
const navItems = [
  {
    title: "About",
    path: "/",
  },
  {
    title: "Case studies",
    path: "/case-studies",
  },
  {
    title: "People",
    path: "/people",
  },
];

const LeftNav = ({ expanded }) => {
  return (
    <SideNav
      aria-label="Side navigation"
      expanded={expanded}
      defaultExpanded={false}
      isPersistent={true}
      className={styles.sideNavWhite}
    >
      <SideNavItems className="sidenav-list">
        {navItems.map((item, i) => (
          <LeftNavItem key={i} title={item.title} path={item.path} />
        ))}
        <LeftNavResourceLinks />
      </SideNavItems>
    </SideNav>
  );
};

export default LeftNav;
