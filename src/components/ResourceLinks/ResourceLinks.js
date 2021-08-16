import React from 'react';
import H2 from 'gatsby-theme-carbon/src/components/markdown/H2';
import H3 from 'gatsby-theme-carbon/src/components/markdown/H3';
import MiniCard from 'gatsby-theme-carbon/src/components/MiniCard/MiniCard';
import CardGroup from 'gatsby-theme-carbon/src/components/MiniCard/CardGroup';
import githubIcon from '../../images/icon/github-icon.svg';
import reactIcon from "../../images/react-icon.svg";
import sketchSymbol from '../../images/sketch-symbol.svg'
import webComponentsIcon from "../../images/web-components-icon.svg";
import components from "../../data/components.json";

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
export const ResourceLinks = ({ type, name, designLink = '', functionalLink = '', multiComponent }) => {

    const component = components[type][name];
    const wikiURLBase = 'https://github.com/carbon-design-system/carbon-for-ibm-dotcom-website/wiki/';
    const wikiName = name.replace(/ /g, '-');

    functionalLink = functionalLink || component.functionalLink;
    designLink = designLink || component.designLink;

    if (functionalLink !== false) {
        functionalLink = functionalLink || wikiURLBase + wikiName;
    }
    
    return (
        <>
            { multiComponent ? <H3>Resources for {name}</H3> : <H2>Resources</H2> }
            <CardGroup>
                { designLink ?
                    <MiniCard title="Design specifications" href={designLink}>
                        <img src={sketchSymbol} alt="Sketch"/>
                    </MiniCard> : ''
                }
                { functionalLink ?
                    <MiniCard title="Functional specifications" href={functionalLink}>
                        <img src={githubIcon} alt="Github" />
                    </MiniCard> : ''
                }
                { components[type][name].storybook.react ?
                    <MiniCard title="React Storybook" href={components[type][name].storybook.react}>
                        <img src={reactIcon} alt="React" />
                    </MiniCard> : ''
                }
                { components[type][name].storybook.webcomponents ?
                    <MiniCard title="Web Components Storybook" href={components[type][name].storybook.webcomponents}>
                        <img src={webComponentsIcon} alt="Web Components" />
                    </MiniCard> : ''
                }
            </CardGroup>
        </>
    );
}