import React from 'react';
import { ComponentStatus } from 'components/ComponentList';
import H2 from 'gatsby-theme-carbon/src/components/markdown/H2';
import SpecLinks from "components/SpecLinks";
import ComponentFeedback from 'components/ComponentFeedback';

// TODO: use from component data

/**
 * Shared footer options across all pages
 *
 * @returns {*} renders component page footer
 * @constructor
 */
export const ComponentFooter = props => {

    return (
        <>
            <br />
            <SpecLinks {...props} />
            <br />
            <H2>Development documentation</H2>
            <br />
            <ComponentStatus {...props} />
            <br />
            <H2>Feedback</H2>
            <ComponentFeedback {...props} />
        </>
    );
}