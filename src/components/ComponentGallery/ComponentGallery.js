/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import componentList from '../../data/components.json';

/**
 * Renders the component image url based on the component name
 * @param {string} component Current component name
 * @returns {string} composed component image URL
 * @private
 */
function getImage(component) {
  let componentImg;
  /**
   * replace white space or white space combo w/ en/em-dash with underscore
   * for consistent svg file naming
   * ex: Content item — horizontal ---> content_item_horizontal.svg
   *  */
  const componentName = component
    .replace(/(\s—\s)|(\s-\s)|\s/g, '_')
    .toLowerCase();
  try {
    componentImg = require(`./images/${componentName}.svg`);
  } catch (e) {
    // eslint-disable-next-line global-require
    componentImg = require('./images/coming_soon.svg');
  }

  return componentImg.default;
}

/**
 * Renders the gallery component item
 * @param {string} name Component name
 * @param {object} component Component object information
 * @returns {*}
 */
const renderItem = ({ name, component }) => (
  <li className="component-item" key={name}>
    <div className="bx--aspect-ratio bx--aspect-ratio--align bx--aspect-ratio--1x1">
      <div className="bx--aspect-ratio--object">
        <Link
          to={component.url}
          className="component-item__link"
          rel="noreferrer"
          target={component.url.indexOf('https://') > -1 ? '_blank' : '_self'}
        >
          <img
            src={getImage(name)}
            alt={name}
            className="component-item__img"
          />
          <p className="component-name">{name}</p>
        </Link>
      </div>
    </div>
  </li>
);

/**
 * Component Overview component
 */
const ComponentGallery = (props) => {
  const { type } = props;

  return (
    <div className="bx--row">
      <div className="bx--col-lg-12 bx--no-gutter">
        <ul className="component-gallery">
          {Object.keys(componentList[type]).map((key) =>
            renderItem({
              name: key,
              component: componentList[type][key],
            })
          )}
        </ul>
      </div>
    </div>
  );
};

ComponentGallery.propTypes = {
  /**
   * Component data type [ui|layout]
   */
  type: PropTypes.string,
};

ComponentGallery.defaultProps = {
  type: 'ui',
};

export default ComponentGallery;
