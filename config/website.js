module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Fur Squared', // Navigation and Site Title
  titleAlt: 'Fur Squared', // Title for JSONLD
  description: 'Fur Squared | CyberSkunk 2020',
  headline: 'No Replicants Allowed', // Headline for schema.org JSONLD
  url: 'https://fursquared.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Fur Squared', // shortname for manifest. MUST be shorter than 12 characters
  author: 'ProxyByte', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  googleAnalyticsID: 'UA-57940890-3',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
};
