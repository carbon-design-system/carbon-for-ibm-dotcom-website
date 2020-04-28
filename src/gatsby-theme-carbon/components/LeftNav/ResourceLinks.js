import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
    {
        title: 'Github',
        href: 'https://github.com/carbon-design-system/ibm-dotcom-library',
    },
    {
        title: 'Design Kit',
        href="http://ibm-dotcom-library.mybluemix.net/resources#ibm.com-library",
    },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links}/>;

export default CustomResources;
