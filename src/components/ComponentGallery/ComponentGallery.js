/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from "react";
import PropTypes from "prop-types";
import componentList from "../../data/components.json";

/**
 * Renders the component image url based on the component name
 * @param {string} component Current component name
 * @returns {string} composed component image URL
 * @private
 */
function _getImage(component) {
  let componentImg;
  const componentName = component.replace(/\s/g, "").toLowerCase();
  try {
    componentImg = require(`./images/${componentName}.svg`);
  } catch (e) {
    // eslint-disable-next-line global-require
    componentImg = require("./images/comingsoon.svg");
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
    type: "ui",
  };

  /**
   * Renders the gallery component item
   * @param {string} name Component name
   * @param {object} component Component object information
   * @returns {*}
   */
  renderItem = ({ name, component }) => {
    return (
      <li className="component-item" key={name}>
        <div className="bx--aspect-ratio bx--aspect-ratio--align bx--aspect-ratio--1x1">
          <div className="bx--aspect-ratio--object">
            <a
              href={component.url}
              className="component-item__link"
              target={
                component.url.indexOf("https://") > -1 ? "_blank" : "_self"
              }
            >
              <img
                src={_getImage(name)}
                alt={name}
                className="component-item__img"
              />
              <p className="component-name">{name}</p>
            </a>
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
            {Object.keys(componentList[type]).map((key) =>
              this.renderItem({
                name: key,
                component: componentList[type][key],
              })
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default ComponentGallery;
