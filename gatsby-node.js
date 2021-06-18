const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

/**
 * Fetches the `Build for IBM.com` document from the main repo and constructs as a Gatsby page
 *
 * @returns {Promise<void>}
 * @private
 */
async function _createBuildForIBMPage() {
  const dest = path.resolve(__dirname, 'src/pages/developing/building-for-ibm-dotcom');
  const buildForIBMsrc = 'https://raw.githubusercontent.com/carbon-design-system/carbon-for-ibm-dotcom/master/docs/building-for-ibm-dotcom.md';
  const buildForIBMheading = `${dest}/heading.txt`;
  const buildForIBMdest = `${dest}/index.mdx`;

  // Download the `Building for IBM.com` docs page from the Carbon for IBM.com repo
  await fetch(buildForIBMsrc, {
    method: 'get',
    headers: {
      'Content-Type': 'text/html',
    },
  })
    .then(response => response.text())
    .then(response => {
      const heading = fs.readFileSync(buildForIBMheading);
      const final = response.substring(response.indexOf('prettier-ignore-end') + 23, response.length - 1);
      fs.writeFileSync(buildForIBMdest, `${heading}${final}`);
    })
    .catch(err => {
      console.error(err);
    });
}

exports.createPages = async () => {
  await _createBuildForIBMPage();
}

exports.onCreateWebpackConfig = ({ actions }) => {
  // Allows importing html files for component code examples
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.md$/,
          loaders: ['html-loader', 'markdown-loader'],
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
          options: {
            minimize: false,
          },
        },
      ],
    },
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
