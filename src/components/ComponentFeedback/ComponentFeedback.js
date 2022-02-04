import React from 'react';
import P from 'gatsby-theme-carbon/src/components/markdown/P';

/**
 * Feedback content at the end of a component page
 *
 * @returns {JSX.Element} Component feedback
 * @constructor
 */
const ComponentFeedback = () => (
  <P>
    Help us improve this component by providing feedback, asking questions, and
    leaving any other comments on{' '}
    <a
      href="https://github.com/carbon-design-system/carbon-for-ibm-dotcom"
      target="_blank"
      rel="noreferrer"
    >
      GitHub
    </a>
    .
  </P>
);

export default ComponentFeedback;
