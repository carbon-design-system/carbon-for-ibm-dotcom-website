import React from 'react';
import { HomepageCallout, FeatureCard } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink, bannerImage, bannerPicture } from './Homepage.module.scss';
import Banner from '../../images/homepage/banner_hero_image.jpg';
import BannerMobile from '../../images/homepage/banner_hero_image_mobile.jpg';
// import Banner2x from '../../images/homepage/banner_hero_image_2x.jpg';

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

const customProps = {
  Banner: (
    <FeatureCard
      color="dark"
      href="getting-started/index"
      subTitle="Read"
      title="Getting Started"
      actionIcon="arrowRight"
      className="homepage-feature"
    >
      <picture className={bannerPicture}>
        <source media="(min-width: 1056px)" srcset={Banner} />
        <source media="(min-width: 672px)" srcset={Banner} />
        <source media="(min-width: 0px)" srcset={BannerMobile} />
        <img src={Banner} alt="Get started" className={bannerImage} />
      </picture>
    </FeatureCard>
  ),
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
