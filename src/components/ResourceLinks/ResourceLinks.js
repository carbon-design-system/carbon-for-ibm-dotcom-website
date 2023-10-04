import React from 'react';
import H2 from 'gatsby-theme-carbon/src/components/markdown/H2';
import H3 from 'gatsby-theme-carbon/src/components/markdown/H3';
import MiniCard from 'gatsby-theme-carbon/src/components/MiniCard/MiniCard';
import CardGroup from 'gatsby-theme-carbon/src/components/MiniCard/CardGroup';
// import githubIcon from '../../images/icon/github-icon.svg';
import reactIcon from '../../images/icon/react-icon.svg';
// import sketchSymbol from '../../images/icon/sketch-symbol.svg';
import webComponentsIcon from '../../images/icon/web-components-icon.svg';
import components from '../../data/components.json';

/**
 * Generates all the spec links in a way for users to consume
 *
 * @param {string} name Name of the component
 * @param {string} type Type of component (ui|layout)
 * @param {string} designLink design spec link override
 * @param {string} functionalLink functional url override
 * @param {boolean} multiComponent Multiple components on one page
 * @returns {*} Spec link description
 * @constructor
 */
export const ResourceLinks = ({
  type,
  name,
  // designLink = '',
  // functionalLink = '',
  multiComponent,
}) => {
  // const component = components[type][name];
  // const wikiURLBase =

  'https://github.com/carbon-design-system/carbon-for-ibm-dotcom-website/wiki/';

  // const wikiName = name.replace(/ /g, '-');
  // const functionalSpecLink =
  //  functionalLink || component.functionalLink || wikiURLBase + wikiName;
  // const designSpecLink = designLink || component.designLink;

  return (
    <>
      {multiComponent ? <H3>Resources for {name}</H3> : <H2>Resources</H2>}
      <CardGroup>
        {components[type][name].storybook.react && (
          <MiniCard
            linkProps={{ target: '_blank', rel: 'noopener' }}
            title="React Storybook"
            href={components[type][name].storybook.react}
          >
            <img src={reactIcon} alt="React" />
          </MiniCard>
        )}
        {components[type][name].storybook.reactwrapper && (
          <MiniCard
            linkProps={{ target: '_blank', rel: 'noopener' }}
            title="React wrapper Storybook"
            href={components[type][name].storybook.reactwrapper}
          >
            <img src={reactIcon} alt="React wrapper" />
          </MiniCard>
        )}
        {components[type][name].storybook.webcomponents && (
          <MiniCard
            linkProps={{ target: '_blank', rel: 'noopener' }}
            title="Web Components Storybook"
            href={components[type][name].storybook.webcomponents}
          >
            <img src={webComponentsIcon} alt="Web Components" />
          </MiniCard>
        )}
      </CardGroup>
    </>
  );
};

export default ResourceLinks;
