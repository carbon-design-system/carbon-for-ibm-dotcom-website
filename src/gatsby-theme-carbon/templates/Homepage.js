import React from 'react';
import { Row, Column } from 'gatsby-theme-carbon';
import { Link } from 'gatsby';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import {
  grid,
  row,
  callout,
  calloutLink,
  calloutImage,
  firstCallout,
  leadspaceText,
  leadspaceImage,
} from './Homepage.module.scss';
import Callout from '../../images/homepage/get_started_desktop.png';
import CalloutTablet from '../../images/homepage/get_started_tablet.png';
import Callout2X from '../../images/homepage/get_started_desktop2x.png';
import LeadSpaceImage from '../../images/homepage/banner_hero_image.png';
import LeadSpaceImageMobile from '../../images/homepage/banner_hero_image_mobile.png';
import LeadSpaceImageTablet from '../../images/homepage/banner_hero_image_tablet.png';
import LeadSpaceImage2X from '../../images/homepage/banner_hero_image_2x.png';
import LeadSpaceImageMobile2X from '../../images/homepage/banner_hero_image_mobile_2x.png';
import LeadSpaceImageTablet2X from '../../images/homepage/banner_hero_image_tablet_2x.png';

const LeadSpaceText = () => (
  <p className={leadspaceText}>
    <strong>Carbon for IBM.com</strong> is the design system for the IBM
    website, providing components, resources, and guidelines for everyone
    creating IBM.com pages.
  </p>
);

const FirstCalloutText = () => (
  <p>
    We have all the building blocks and tools you need to make productive,
    efficient, and delightful experiences.
  </p>
);

const FirstCalloutLink = () => (
  <Link to="/about-carbon-for-ibm.com/what-we-provide" className={calloutLink}>
    What we provide →
  </Link>
);

const SecondCalloutText = () => (
  <>
    <p>
      Want to <strong>contribute</strong>? We welcome all feedback, designs, or
      ideas in order to produce the best possible experience for our users. If
      you are interested in contributing, check out our contributing guidelines
      to get started.
    </p>
    <Link to="/contributing/overview" className={calloutLink}>
      Start contributing →
    </Link>
  </>
);

const customProps = {
  Banner: (
    <>
      <span className="homepage--dots" />
      <section>
        <div className="bx--grid">
          <div className="bx--row">
            <Column colLg={11} colMd={8}>
              {LeadSpaceText()}
            </Column>
            <Column colLg={11} colMd={8} className={leadspaceImage}>
              <picture>
                <source
                  media="(min-width: 1056px)"
                  srcSet={`${LeadSpaceImage}, ${LeadSpaceImage2X} 2x`}
                />
                <source
                  media="(min-width: 672px)"
                  srcSet={`${LeadSpaceImageTablet}, ${LeadSpaceImageTablet2X} 2x`}
                />
                <source
                  media="(min-width: 0px)"
                  srcSet={`${LeadSpaceImageMobile}, ${LeadSpaceImageMobile2X} 2x`}
                />
                <img src={LeadSpaceImage} alt="Get started" />
              </picture>
            </Column>
          </div>
        </div>
      </section>
    </>
  ),
  FirstCallout: (
    <div className={`bx--grid homepage--callout ${grid} ${firstCallout}`}>
      <Row className={row}>
        <Column className={callout} colLg={7} colMd={5}>
          <h3>Get started</h3>
          {FirstCalloutText()}
        </Column>
        <Column className={calloutImage} colLg={5} colMd={3}>
          <picture>
            <source
              media="(min-width: 1056px)"
              srcSet={`${Callout}, ${Callout2X} 2x`}
            />
            <source media="(min-width: 672px)" srcSet={CalloutTablet} />
            <source media="(min-width: 0px)" srcSet={Callout} />
            <img src={Callout} alt="Get started" />
          </picture>
        </Column>
        <Column className={callout} colLg={7} colMd={5}>
          {FirstCalloutLink()}
        </Column>
      </Row>
    </div>
  ),
  SecondCallout: (
    <div className={`bx--grid homepage--callout ${grid}`}>
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
