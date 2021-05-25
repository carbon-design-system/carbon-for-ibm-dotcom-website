import React from 'react';
import P from 'gatsby-theme-carbon/src/components/markdown/P';
import H2 from 'gatsby-theme-carbon/src/components/markdown/H2';
import Link from 'gatsby-theme-carbon/src/components/Link';

/**
 * Generates all the spec links in a way for users to consume
 *
 * @param {string} name Name of the component
 * @param {string} designLink design spec link
 * @param {string} functionalLink functional url override
 * @returns {*} Spec link description
 * @constructor
 */
export const SpecLinks = ({ name = '', designLink = '', functionalLink = '' }) => {
    
    const wikiURLBase = 'https://github.com/carbon-design-system/carbon-for-ibm-dotcom-website/wiki/';
    const wikiName = name.replace(/ /g, '-');
    let addFunctionalTitle = '';
    let addFunctionalLink = null;
    
    if (wikiName && functionalLink) {
    
        functionalLink = functionalLink || wikiURLBase + wikiName;

        addFunctionalLink = (
            <> and <Link href={functional}>see functional specs</Link></>
        );

        addFunctionalTitle = ' and functional';
    }
    
    return (
        <>
          <H2>Design{addFunctionalTitle} specifications</H2>
          <P>
            For more details{name ? `on ${name}` : null}, <Link href={design}>see design specs</Link>{addFunctionalLink}.
          </P>
        </>
    );
}