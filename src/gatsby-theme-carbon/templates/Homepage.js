import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';
import Banner from '../../images/homepage/banner_hero_image.jpg';

const FirstLeftText = () => <p>IBM.com Library </p>;

const FirstRightText = () => (
  <p>
    IBM.com Library is a collection of components, patterns, tools, and guidelines for designers and developers building IBM.com experiences. Its components and patterns are based on Carbon Design System and optimized for building IBM.com experiences.
  </p>
);

const SecondLeftText = () => <p>Wondering how to contribute?</p>;

const SecondRightText = () => (
  <p>
    We welcome all feedback, designs, or ideas in order to produce the best
    possible experience for our users. If you’re interested in contributing,
    check out our contributing guidelines to get started.
    <a
      className={calloutLink}
      href="https://www.carbondesignsystem.com/how-to-contribute/overview/">
      Start contributing →
    </a>
  </p>
);

const BannerText = () => <h1 />;

const customProps = {
  Banner: <HomepageBanner image={Banner} renderText={BannerText} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
