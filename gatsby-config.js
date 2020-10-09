require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: process.env.PATH_PREFIX || "/",
  siteMetadata: {
    title: 'Carbon for IBM.com',
    description: 'This is the Carbon for IBM.com website, which includes documentation and guidelines around design and development for IBM.com',
    keywords: 'gatsby,theme,carbon,ibm',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        name: 'Carbon for IBM.com',
        short_name: 'Carbon for IBM.com',
        repository: {
          baseUrl: 'https://github.com/carbon-design-system/carbon-for-ibm-dotcom-website',
          subDirectory: '',
        },
      },
    },
  ],
};
