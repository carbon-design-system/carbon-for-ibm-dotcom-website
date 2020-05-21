import React from "react";
import { ResourceCard, Row, Column } from "gatsby-theme-carbon";
import HomepageTemplate from "gatsby-theme-carbon/src/templates/Homepage";
import {
  grid,
  row,
  callout,
  calloutLink,
  calloutImage,
  bannerImage,
  bannerPicture,
} from "./Homepage.module.scss";
import Banner from "../../images/homepage/banner_hero_image.jpg";
import BannerMobile from "../../images/homepage/banner_hero_image_mobile.jpg";
import Banner2x from "../../images/homepage/banner_hero_image_2x.jpg";
import Callout from "../../images/homepage/callout.png";
import CalloutTablet from "../../images/homepage/callout-tablet.png";

const FirstCalloutText = () => (
  <>
    <p>
      We prepared a set of guidelines and tools for you and your team to start
      building your IBM.com vision.
    </p>
    <a
      className={calloutLink}
      href="https://www.carbondesignsystem.com/how-to-contribute/overview/"
    >
      Start with overview →
    </a>
  </>
);

const SecondCalloutText = () => (
  <>
    <p>
      Want to <strong>contribute</strong>? We welcome all feedback, designs, or
      ideas in order to produce the best possible experience for our users. If
      you are interested in contributing, check out our contributing guidelines
      to get started.
    </p>
    <a
      className={calloutLink}
      href="https://www.carbondesignsystem.com/how-to-contribute/overview/"
    >
      Start contributing →
    </a>
  </>
);

const customProps = {
  Banner: (
    <>
      <span className="homepage--dots" />
      <section className="homepage--header homepage--hearder__no-dots">
        <div className="bx--grid">
          <div className="bx--row">
            <picture className={bannerPicture}>
              <source
                media="(min-width: 1056px)"
                srcset={`${Banner}, ${Banner2x} 2x`}
              />
              <source
                media="(min-width: 672px)"
                srcset={`${Banner}, ${Banner2x} 2x`}
              />
              <source media="(min-width: 0px)" srcset={BannerMobile} />
              <img src={Banner} alt="Get started" className={bannerImage} />
              <div className="homepage--leadspace--overlay" />
            </picture>
            <div className="bx--col-lg-4 bx--col-md-4 bx--col-sm-2 bx--offset-lg-8 bx--offset-md-4 bx--offset-sm-2 homepage--tile-header">
              <ResourceCard
                subTitle="Read"
                title="Get started"
                href="/get-started"
                color="dark"
                actionIcon="arrowRight"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  ),
  FirstCallout: (
    <div className={`bx--grid ${grid}`}>
      <Row className={row}>
        <Column className={callout} colLg={16} colMd={8}>
          <h3>Get Started</h3>
        </Column>
        <Column className={callout} colLg={7} colMd={5}>
          {FirstCalloutText()}
        </Column>
        <Column className={callout} colLg={5} colMd={3}>
          <picture>
            <source media="(min-width: 1056px)" srcset={Callout} />
            <source media="(min-width: 672px)" srcset={CalloutTablet} />
            <source media="(min-width: 0px)" srcset={Callout} />
            <img src={Callout} className={calloutImage} alt="Get started" />
          </picture>
        </Column>
      </Row>
    </div>
  ),
  SecondCallout: (
    <div className={`bx--grid ${grid}`}>
      <Row className={row}>
        <Column className={callout} colLg={8} colMd={7}>
          <h3>Contribute</h3>
          <div>{SecondCalloutText()}</div>
        </Column>
      </Row>
    </div>
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
