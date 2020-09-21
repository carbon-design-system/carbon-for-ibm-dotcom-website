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
function _getImage(component) {
  let componentImg;
  try {
    componentImg = require(`./images/${component}.svg`);
  } catch (e) {
    // eslint-disable-next-line global-require
    componentImg = require('./images/NoImage.svg');
  }

  return componentImg;
}

/**
 * Component Overview component
 */
class ComponentGallery extends React.Component {
  static propTypes = {
    /**
     * Component data type [ui|layout]
     */
    type: PropTypes.string,
  };

  static defaultProps = {
    type: 'ui',
  };

  renderItems = currentItem => {
    const component = currentItem.component;

    return (
      <li className="component-item" key={component}>
        <div className="bx--aspect-ratio bx--aspect-ratio--align bx--aspect-ratio--1x1">
          <div className="bx--aspect-ratio--object">
            <Link to={currentItem.url} className="component-item__link">
              <img
                src={_getImage(component)}
                alt={component}
                className="component-item__img"
              />
              <p className="component-name">{component}</p>
            </Link>
          </div>
        </div>
      </li>
    );
  };

  render() {
    const { type } = this.props;

    return (
      <div className="bx--row">
        <div className="bx--col-lg-12 bx--no-gutter">
          <ul className="component-gallery">
            {Object.keys(componentList[type]).map(component =>
              this.renderItems(componentList[type][component])
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default ComponentGallery;
