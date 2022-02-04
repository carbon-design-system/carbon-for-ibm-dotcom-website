const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');

/**
 * Fetches the `Build for IBM.com` document from the main repo and constructs as a Gatsby page
 *
 * @returns {Promise<void>}
 * @private
 */
async function createBuildForIBMPage() {
  const dest = path.resolve(
    __dirname,
    'src/pages/developing/building-for-ibm-dotcom'
  );
  const buildForIBMsrc =
    'https://raw.githubusercontent.com/carbon-design-system/carbon-for-ibm-dotcom/main/docs/building-for-ibm-dotcom.md';
  const buildForIBMheading = `${dest}/heading.txt`;
  const buildForIBMdest = `${dest}/index.mdx`;

  if (!fs.existsSync(buildForIBMdest)) {
    // Download the `Building for IBM.com` docs page from the Carbon for IBM.com repo
    await fetch(buildForIBMsrc, {
      method: 'get',
      headers: {
        'Content-Type': 'text/html',
      },
    })
      .then((response) => response.text())
      .then((response) => {
        const heading = fs.readFileSync(buildForIBMheading);
        const final = response.substring(
          response.indexOf('prettier-ignore-end') + 23,
          response.length - 1
        );

        fs.writeFileSync(buildForIBMdest, `${heading}${final}`);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

/**
 * Fetches the `Carbon CDN Style Helpers` document from the main repo
 * and constructs as a Gatsby page
 *
 * @returns {Promise<void>}
 * @private
 */
async function createCDNStyleHelpersPage() {
  const dest = path.resolve(
    __dirname,
    'src/pages/developing/carbon-cdn-style-helpers'
  );
  const styleHelperssrc =
    'https://raw.githubusercontent.com/carbon-design-system/carbon-for-ibm-dotcom/main/packages/web-components/docs/carbon-cdn-style-helpers.md';
  const styleHelpersheading = `${dest}/heading.txt`;
  const styleHelpersdest = `${dest}/index.mdx`;

  if (!fs.existsSync(styleHelpersdest)) {
    // Download the `Building for IBM.com` docs page from the Carbon for IBM.com repo
    await fetch(styleHelperssrc, {
      method: 'get',
      headers: {
        'Content-Type': 'text/html',
      },
    })
      .then((response) => response.text())
      .then((response) => {
        const heading = fs.readFileSync(styleHelpersheading);
        const final = response.substring(
          response.indexOf('prettier-ignore-end') + 23,
          response.length - 1
        );

        fs.writeFileSync(styleHelpersdest, `${heading}${final}`);
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

exports.createPages = async () => {
  await createBuildForIBMPage();
  await createCDNStyleHelpersPage();
};

exports.onCreateWebpackConfig = ({ actions }) => {
  // Allows importing html files for component code examples
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.md$/,
          use: ['html-loader', 'markdown-loader'],
        },
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
            options: {
              minimize: false,
            },
          },
        },
      ],
    },
    plugins: [new webpack.IgnorePlugin({ resourceRegExp: /canvas/ })],
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
