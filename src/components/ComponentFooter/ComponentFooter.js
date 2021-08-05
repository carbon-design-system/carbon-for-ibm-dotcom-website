import React from 'react';
import H2 from 'gatsby-theme-carbon/src/components/markdown/H2';
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
            <H2>Feedback</H2>
            <ComponentFeedback {...props} />
        </>
    );
}