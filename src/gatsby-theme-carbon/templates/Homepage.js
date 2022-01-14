import React from 'react';
import { Column } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { leadspaceText } from './Homepage.module.scss';

const LeadSpaceText = () => (
  <p className={leadspaceText}>
    Carbon for IBM.com is the design system for the IBM website, providing
    components, resources, and guidelines for everyone creating IBM.com pages.
  </p>
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
          </div>
        </div>
      </section>
    </>
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
