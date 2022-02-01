require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: process.env.PATH_PREFIX || '/',
  siteMetadata: {
    title: 'Carbon for IBM.com',
    description:
      'This is the Carbon for IBM.com website, which includes documentation and guidelines around design and development for IBM.com',
    keywords: 'gatsby,theme,carbon,ibm',
    homepageTheme: 'dark',
    interiorTheme: 'g10',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        name: 'Carbon for IBM.com',
        short_name: 'Carbon for IBM.com',
        iconPath: './src/images/favicon.svg',
        repository: {
          baseUrl:
            'https://github.com/carbon-design-system/carbon-for-ibm-dotcom-website',
          subDirectory: '',
        },
        theme: {
          homepage: 'dark',
          interior: 'g10',
        },
      },
    },
  ],
};
