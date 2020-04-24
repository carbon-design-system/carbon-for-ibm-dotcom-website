import React from 'react';
import { FourOhFour } from 'gatsby-theme-carbon';

const links = [
  { href: '/chelp/index', text: 'Help' },
  { href: 'https://ibm-studios.slack.com/archives/C2PLX8GQ6', text: 'Slack' },
  { href: 'https://github.com/carbon-design-system/ibm-dotcom-library', text: 'Github repo' },
];

const Custom404 = () => <FourOhFour links={links} />;

export default Custom404;
