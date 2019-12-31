require('dotenv').config({
  path: `.env`,
});

const website = require('./config/website');

const pathPrefix = website.pathPrefix === '/' ? '' : website.pathPrefix;
const deployProtocol = process.env.DEPLOY_PROTOCOL || 'https';
const deployHost = process.env.DEPLOY_HOSTNAME || 'fursquared.com';
const siteUrl = `${deployProtocol}://${deployHost}`;

module.exports = {
  /* General Information */
  siteMetadata: {
    title: website.title,
    description: website.description,
    author: website.author,
    siteUrl: siteUrl
  },
  /* Plugins */
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: `${process.env.PRISMIC_REPO}`,
        accessToken: `${process.env.PRISMIC_API_KEY}`,
        path: '/preview',
        previews: true,
      },
    },
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-lodash',
    // {
    //   resolve: 'gatsby-plugin-typography',
    //   options: {
    //     pathToConfigModule: 'config/typography.js',
    //   },
    // },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: website.googleAnalyticsID,
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: website.title,
        short_name: website.titleAlt,
        description: website.description,
        start_url: pathPrefix,
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: 'standalone',
        icon: website.favicon,
      },
    },
    // Must be placed at the end
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}
