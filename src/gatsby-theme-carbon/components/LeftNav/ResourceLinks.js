import React from "react";
import ResourceLinks from "gatsby-theme-carbon/src/components/LeftNav/ResourceLinks";

const links = [
  {
    title: "Github",
    href: "https://github.com/DS4SD",
  },
  {
    title: "Publications",
    href: "https://research.ibm.com/publications?search=eyJ0eXBlIjoiYXV0aG9yIiwidmFsdWUiOnsiaWQiOiIyMDEyOCIsInRleHQiOiJEZWVwIFNlYXJjaCJ9fQ==&sort=newest",
  },
  {
    title: "IBM Research",
    href: "https://research.ibm.com",
  },
  {
    title: "Accelerated Discovery",
    href: "https://research.ibm.com/teams/accelerated-discovery",
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
