const keys = require("./config/dev")

module.exports = {
  siteMetadata: {
    title: `ECZE`,
    description: `If you want to cure your eczema, you need to LEARN about eczema.`,
    author: `@calvchum`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-modal-routing`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#00DAD3`,
        theme_color: `#00DAD3`,
        display: `minimal-ui`,
        icon: `src/assets/logo/fav-white.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "sakb3b8oyk7r",
        accessToken: "Q7Mk_nEwSOl1Fxq_8lcPG0dk0fAfknVc15aP0U9H29E",
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utilities/Fonts.js`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
