/* eslint-disable import/no-unresolved */
import React, { useEffect, useLayoutEffect, useState } from 'react';

import { Information16, ArrowRight20 } from '@carbon/icons-react';
import { Button } from 'carbon-components-react';

import Meta from 'gatsby-theme-carbon/src/components/Meta';
import LeftNav from 'gatsby-theme-carbon/src/components/LeftNav';
import Header from 'gatsby-theme-carbon/src/components/Header';
import Switcher from 'gatsby-theme-carbon/src/components/Switcher';
import Footer from 'gatsby-theme-carbon/src/components/Footer';
import Container from 'gatsby-theme-carbon/src/components/Container';

import 'gatsby-theme-carbon/src/styles/index.scss';
import { layout, layoutNoBanner, banner, bannerText, bannerIcon, bannerClose } from '../../styles/Layout.module.scss';

const Layout = ({
  children,
  homepage,
  theme,
  titleType,
  pageTitle,
  pageDescription,
  pageKeywords,
  tabs,
}) => {
  const is404 = children.key === null;
  const [isBannerVisible, setBannerVisibility] = useState(true);

  useLayoutEffect(() => {
    // eslint-disable-next-line global-require
    const scroll = require('smooth-scroll')('a[href*="#"]', {
      speed: 400,
      durationMin: 250,
      durationMax: 700,
      easing: 'easeInOutCubic',
      clip: true,
      offset: tabs ? 112 : 64,
    });
    return scroll.destroy;
  }, [tabs]);

  useEffect(() => {
    if (localStorage.getItem('isBannerVisible'))
      setBannerVisibility(localStorage.getItem('isBannerVisible') === 'true');
  }, [setBannerVisibility]);

  const handleBannerClose = () => {
    localStorage.setItem('isBannerVisible', false);
    setBannerVisibility(false);
  };

  return (
    <div className={isBannerVisible ? layout : layoutNoBanner}>
      <Meta
        titleType={titleType}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageKeywords={pageKeywords}
      />
      {isBannerVisible ? (
        <div className={banner} role="contentinfo">
          <span className={bannerText}>
            <Information16 className={bannerIcon} /> Please be aware that v18/v19a design systems are targeted to be sunset at the end of 2021.
          </span>
          <Button
            className={bannerClose}
            hasIconOnly
            href="/get-started#legacy-design-systems-are-v19a-v18-and-older-(the-sunset-of-the-legacy-systems-will-begin-in-the-4th-quarter-of-2021)"
            renderIcon={ArrowRight20}
            onClick={handleBannerClose}
            iconDescription="Close the banner"
          >
            View detail
          </Button>
        </div>
      ) : null}
      <Header />
      <Switcher />
      <LeftNav homepage={homepage} is404Page={is404} theme={theme} />
      <Container homepage={homepage} theme={theme}>
        {children}
        <Footer />
      </Container>
    </div>
  );
};

export default Layout;
