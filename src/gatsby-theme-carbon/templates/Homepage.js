import React from "react";
import { HomepageCallout } from "gatsby-theme-carbon";
import HomepageTemplate from "gatsby-theme-carbon/src/templates/Homepage";
import {
  calloutLink,
  leadspaceText,
  leadspaceImage,
} from "./Homepage.module.scss";
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

const FirstLeftText = () => <p>IBM.com Library </p>;

const FirstRightText = () => (
  <p>
    IBM.com Library is a collection of components, patterns, tools, and
    guidelines for designers and developers building IBM.com experiences. Its
    components and patterns are based on Carbon Design System and optimized for
    building IBM.com experiences.
  </p>
);

const SecondLeftText = () => (
  <p>
    Wondering how <br /> to contribute?
  </p>
);

const SecondRightText = () => (
  <p>
    We welcome all feedback, designs, or ideas in order to produce the best
    possible experience for our users. If you are interested in contributing,
    check out our contributing guidelines to get started.
    <a
      className={calloutLink}
      href="https://www.carbondesignsystem.com/how-to-contribute/overview/"
    >
      Start contributing →
    </a>
  </p>
);

const customProps = {
  Banner: (
    <>
      <span className="homepage--dots" />
      <section>
        <div className="bx--grid">
          <div className="bx--row">
            <div className="bx--col-lg-11 bx--col-md-7 bx--col-sm-4">
              {LeadSpaceText()}
            </div>
            <div className="bx--col-lg-16 bx--col-md-8 bx--col-sm-4">
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
            </div>
          </div>
        </div>
      </section>
    </>
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
