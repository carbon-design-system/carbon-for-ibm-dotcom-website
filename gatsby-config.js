module.exports = {
  siteMetadata: {
    title: 'IBM.com Library',
    description: 'This is the IBM.com Library website, which includes documentation and guidelines around design and development for IBM.com',
    keywords: 'gatsby,theme,carbon,ibm',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        name: 'IBM.com Library',
        short_name: 'IBM.com Library',
        repository: {
          baseUrl: 'https://github.com/carbon-design-system/ibm-dotcom-library-website',
          subDirectory: '',
        },
      },
    },
  ],
};
