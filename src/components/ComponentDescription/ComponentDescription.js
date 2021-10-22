import React from 'react';
import PageDescription from 'gatsby-theme-carbon/src/components/PageDescription';
import P from 'gatsby-theme-carbon/src/components/markdown/P';
import components from '../../data/components.json';

/**
 * Returns the description of the component as a PageDescription block
 *
 * @param {string} name Name of the component
 * @param {string} type Type of component (ui|layout)
 * @returns {*} Component description
 * @constructor
 */
const ComponentDescription = ({ name, type }) => (
  <PageDescription>
    <P
      dangerouslySetInnerHTML={{ __html: components[type][name].description }}
    />
  </PageDescription>
);

export default ComponentDescription;
