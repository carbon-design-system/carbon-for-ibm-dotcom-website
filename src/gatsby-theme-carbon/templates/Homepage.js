import React from "react";
import { Row, Column } from "gatsby-theme-carbon";
import HomepageTemplate from "gatsby-theme-carbon/src/templates/Homepage";
import {
  grid,
  row,
  callout,
  calloutLink,
  calloutImage,
  firstCallout,
  leadspaceText,
  leadspaceImage,
} from "./Homepage.module.scss";
import Callout from "../../images/homepage/callout.png";
import CalloutTablet from "../../images/homepage/callout-tablet.png";
import LeadSpaceImage from "../../images/homepage/leadspace_hero_image.png";
import LeadSpaceImageMobile from "../../images/homepage/leadspace_hero_image_mobile.png";
import LeadSpaceImageTablet from "../../images/homepage/leadspace_hero_image_tablet.png";

const LeadSpaceText = () => (
  <p className={leadspaceText}>
    IBM.com is a platform where our customers can find solutions, get their jobs
    done, and grow their businesses <strong>efficiently</strong> and{" "}
    <strong>effectively.</strong>
  </p>
);

const FirstCalloutText = () => (
  <p>
    We prepared a set of guidelines and tools for you and your team to start
    building your IBM.com vision.
  </p>
);

const FirstCalloutLink = () => (
  <a
    className={calloutLink}
    href="https://www.carbondesignsystem.com/how-to-contribute/overview/"
  >
    Start with overview →
  </a>
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
      <section>
        <div className="bx--grid">
          <div className="bx--row">
            <Column colLg={11} colMd={7}>
              {LeadSpaceText()}
            </Column>
            <Column>
              <picture>
                <source media="(min-width: 1056px)" srcset={LeadSpaceImage} />
                <source
                  media="(min-width: 672px)"
                  srcset={LeadSpaceImageTablet}
                />
                <source
                  media="(min-width: 0px)"
                  srcset={LeadSpaceImageMobile}
                />
                <img
                  src={LeadSpaceImage}
                  alt="Get started"
                  className={leadspaceImage}
                />
              </picture>
            </Column>
          </div>
        </div>
      </section>
    </>
  ),
  FirstCallout: (
    <div className={`bx--grid ${grid} ${firstCallout}`}>
      <Row className={row}>
        <Column className={callout} colLg={7} colMd={5}>
          <h3>Get Started</h3>
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
      <Row className={row}>
        <Column className={callout} colLg={7} colMd={5}>
          {FirstCalloutLink()}
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
