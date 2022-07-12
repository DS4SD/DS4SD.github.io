module.exports = {
  siteMetadata: {
    title: "IBM Deep Search Homepage",
    description: "Homepage of the Deep Search platform.",
    keywords:
      "deep search, pdf search, document search, corpus conversion, pdf search, knowledge graph",
  },
  pathPrefix: `/`,
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "IBM Deep Search",
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-8WR82RYJQL"],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: [],
        },
      },
    },
  ],
};
