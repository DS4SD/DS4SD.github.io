module.exports = {
  siteMetadata: {
    title: "IBM Deep Search Homepage",
    description: "A Gatsby theme for the carbon design system",
    keywords:
      "deep search, pdf search, document search, corpus conversion, pdf search, knowledge graph",
  },
  pathPrefix: `/CognitiveCore-Utilities/deepsearch-public-landing`,
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "IBM Deep Search Homepage",
        icon: "src/images/favicon.svg",
        short_name: "Deep Search",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#161616",
        display: "browser",
      },
    },
    {
      resolve: "gatsby-theme-carbon",
      options: {
        iconPath: "./src/images/favicon.svg",
        isSwitcherEnabled: false,
        isSearchEnabled: false,
        repository: "",
      },
    },
  ],
};
