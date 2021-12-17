import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'carbon-components-react';
import { Link } from 'gatsby';
import components from '../../data/components.json';

/**
 * Defined available tags for the components
 * @type {{new: *, stable: *, deprecated: *, experimental: *, underConstruction: *, updated: *, notAvailable: *}}
 * @private
 */
const tags = {
  stable: <Tag type="green">Stable</Tag>,
  experimental: <Tag type="teal">Experimental</Tag>,
  new: <Tag type="purple">New</Tag>,
  updated: <Tag type="blue">Updated</Tag>,
  deprecated: <Tag type="red">Deprecated</Tag>,
  underConstruction: <Tag type="cool-gray">Under construction</Tag>,
};

/**
 * Renders a single component line item
 * @param {string} name Component name
 * @param {object} component Current component item object
 * @returns {*} Table line item
 */
const renderItem = ({ name, component }) => (
  <tr key={name}>
    <td>
      <Link
        to={component.url}
        rel="noreferrer"
        target={component.url.indexOf('https://') > -1 ? '_blank' : '_self'}
      >
        {name}
      </Link>
    </td>
    {/* eslint-disable-next-line react/no-danger */}
    <td dangerouslySetInnerHTML={{ __html: component.description }} />
    <td>
      {Object.keys(component.react)
        .filter((key) => component.react[key])
        .map((key) => (
          <React.Fragment key={key}>{tags[key]}</React.Fragment>
        ))}
    </td>
    <td>
      {Object.keys(component.webcomponents)
        .filter((key) => component.webcomponents[key])
        .map((key) => (
          <React.Fragment key={key}>{tags[key]}</React.Fragment>
        ))}
    </td>
  </tr>
);

/**
 * Component List component
 */
const ComponentList = (props) => {
  const { type } = props;
  return (
    <div className="bx--row component-list">
      <div className="bx--col-lg-12 bx--no-gutter">
        <table className="page-table">
          <thead>
            <tr>
              <th>Component</th>
              <th>Description</th>
              <th>React</th>
              <th>Web Components</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(components[type]).map((key) =>
              renderItem({ name: key, component: components[type][key] })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

ComponentList.propTypes = {
  /**
   * Component data type [ui|layout]
   */
  type: PropTypes.string,
};

ComponentList.defaultProps = {
  type: 'ui',
};

/**
 * Returns the table with the list of tabs and their definitions
 * @returns {*} Tag key table
 * @constructor
 */
const TagKey = () => (
  <div className="bx--row component-list">
    <div className="bx--col-lg-8 component-list__key">
      <h4 className="page-h4">Key</h4>
    </div>
    <div className="bx--col-lg-8 bx--no-gutter">
      <table className="page-table">
        <thead>
          <tr>
            <th>Tag</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{tags.stable}</td>
            <td>Component is dev and design production-ready.</td>
          </tr>
          <tr>
            <td>{tags.experimental}</td>
            <td>
              Component can be used but is not considered stable and changes to
              it may occur.
            </td>
          </tr>
          <tr>
            <td>{tags.deprecated}</td>
            <td>
              Component has either been replaced by a new version or it is no
              longer being supported by the system.
            </td>
          </tr>
          <tr>
            <td>{tags.new}</td>
            <td>
              Component is new to framework in the last major version update.
            </td>
          </tr>
          <tr>
            <td>{tags.updated}</td>
            <td>
              An existing component that had been under review, tweaked, and
              re-released in the last major version.
            </td>
          </tr>
          <tr>
            <td>{tags.underConstruction}</td>
            <td>New components that are currently being worked on.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export { ComponentList, TagKey };
