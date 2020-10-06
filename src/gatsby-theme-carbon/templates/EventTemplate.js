/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import slugify from 'slugify';
import { useStaticQuery, graphql } from 'gatsby';

import Utils from 'gatsby-theme-carbon/src/components/Utils';
import Layout from 'gatsby-theme-carbon/src/components/Layout';
import PageHeaderForEvents from 'gatsby-theme-carbon/src/components/PageHeaderForEvents';
import EditLink from 'gatsby-theme-carbon/src/components/EditLink';
import NextPrevious from 'gatsby-theme-carbon/src/components/NextPrevious';
import PageTabs from 'gatsby-theme-carbon/src/components/PageTabs';
import Main from 'gatsby-theme-carbon/src/components/Main';

import mobile from './../../pages/events/summit-2020/images/lead-space--mobile.png';
import desktop from './../../pages/events/summit-2020/images/lead-space--desktop.png'

const bgImages = [mobile,desktop];

//export const backgroundImages = [mobile, desktop];

// Shadowing: pass through backgroundImages to PageHeader

const EventTemplpate = ({
  pageContext,
  children,
  location,
  Title,
  backgroundImages,
}) => {
  const { frontmatter = {}, relativePagePath, titleType } = pageContext;
  const { tabs, title, theme, description, keywords } = frontmatter;

  // get the path prefix if it exists
  const {
    site: { pathPrefix },
  } = useStaticQuery(graphql`
    query PATH_PREFIX_LAYOUT_QUERY {
      site {
        pathPrefix
      }
    }
  `);

  // let gatsby handle prefixing
  const slug = pathPrefix
    ? location.pathname.replace(pathPrefix, '')
    : location.pathname;

  const getCurrentTab = () => {
    if (!tabs) return '';
    return (
      slug
        .split('/')
        .filter(Boolean)
        .slice(-1)[0] || slugify(tabs[0], { lower: true })
    );
  };

  const currentTab = getCurrentTab();
  return (
    <Layout
      tabs={tabs}
      homepage={false}
      theme={theme}
      pageTitle={title}
      pageDescription={description}
      pageKeywords={keywords}
      titleType={titleType}
    >
      <PageHeaderForEvents
        backgroundImages={bgImages}
        title={Title ? <Title /> : title}
        label="label"
        tabs={tabs}
      />
      {tabs && <PageTabs slug={slug} tabs={tabs} currentTab={currentTab} />}
      <Main padded>
        {children}
        <EditLink relativePagePath={relativePagePath} />
      </Main>
      <NextPrevious
        pageContext={pageContext}
        location={location}
        slug={slug}
        tabs={tabs}
        currentTab={currentTab}
      />
      <Utils />
    </Layout>
  );
};

export default EventTemplpate;