import React from 'react';
import { HomepageCallout, ResourceCard } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink, bannerImage, bannerPicture } from './Homepage.module.scss';
import Banner from '../../images/homepage/banner_hero_image.jpg';
import BannerMobile from '../../images/homepage/banner_hero_image_mobile.jpg';
import Banner2x from '../../images/homepage/banner_hero_image_2x.jpg';

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
    (
      <>
        <span className="homepage--dots" />
        <section className="homepage--header">
          <div className="bx--grid">
            <div className="bx--row">
              <div className="bx--col-lg-4 bx--col-md-4 bx--col-sm-2 bx--offset-lg-8 bx--offset-md-4 bx--offset-sm-2 homepage--tile-header">
                <ResourceCard
                  subTitle="Read"
                  title="Getting Started"
                  href="/getting-started"
                  color="dark"
                  actionIcon="arrowRight"
                />
              </div>
              <picture className={bannerPicture}>
                <source media="(min-width: 1056px)" srcset={`${Banner}, ${Banner2x} 2x`} />
                <source media="(min-width: 672px)" srcset={`${Banner}, ${Banner2x} 2x`} />
                <source media="(min-width: 0px)" srcset={BannerMobile} />
                <img src={Banner} alt="Get started" className={bannerImage} />
              </picture>
            </div>
          </div>
        </section>
      </>
    )
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
