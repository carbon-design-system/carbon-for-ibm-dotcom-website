import React from 'react';
import P from 'gatsby-theme-carbon/src/components/markdown/P';
import H2 from 'gatsby-theme-carbon/src/components/markdown/H2';
import Link from 'gatsby-theme-carbon/src/components/Link';
import components from "../../data/components.json";

/**
 * Generates all the spec links in a way for users to consume
 *
 * @param {string} name Name of the component
 * @param {string} type Type of component (ui|layout)
 * @param {string} designLink design spec link
 * @param {string} functionalLink functional url override
 * @returns {*} Spec link description
 * @constructor
 */
export const SpecLinks = ({ type, name, designLink = '', functionalLink = '' }) => {

    const component = components[type][name];
    const wikiURLBase = 'https://github.com/carbon-design-system/carbon-for-ibm-dotcom-website/wiki/';
    const wikiName = name.replace(/with /g, '').replace(/ /g, '-');
    
    let addTitles = [];
    let addLinks = [];

    functionalLink = functionalLink || component.functionalLink;
    designLink = designLink || component.designLink;
    
    console.log(designLink)

    if (!designLink && functionalLink !== false) {
        return null;
    }
    
    if (designLink) {
        addTitles.push('design');
        addLinks.push(<Link href={designLink}>see design specs</Link>);
    }

    if (functionalLink !== false) {
        functionalLink = functionalLink || wikiURLBase + wikiName;

        addTitles.push('functional');

        addLinks.push(addLinks.length > 0 ? ' and ' : ' ');
        addLinks.push(<Link href={functionalLink}>see functional specs</Link>);
    }
    
    return (
        <>
          {/*<H2>{uppercaseFirst(addTitles.join(' and '))} specifications</H2>*/}
          <H2>Design and functional specifications</H2>
          <P>
            For more details{name ? ` on ${name}` : null}, {addLinks}.
          </P>
        </>
    );
}

function uppercaseFirst (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}