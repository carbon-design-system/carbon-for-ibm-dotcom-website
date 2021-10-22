import React from 'react';
import { Link } from 'gatsby';
import Layout from 'gatsby-theme-carbon/src/components/Layout';
import {
  container,
  fourOhFour,
  paragraph,
  heading,
  link,
  list,
} from 'gatsby-theme-carbon/src/components/FourOhFour/FourOhFour.module.scss';

const links = [
  { href: '/help', text: 'Help' },
  {
    href: 'https://ibm-studios.slack.com/archives/C2PLX8GQ6',
    text: '#carbon-for-ibm-dotcom',
  },
  {
    href: 'https://www.github.com/carbon-design-system/carbon-for-ibm-dotcom',
    text: 'GitHub Repo',
  },
];

const FourOhFourCustom = () => (
  <Layout homepage>
    <div className={`container--dark ${container}`}>
      <h2 className={heading}>Something’s gone wrong...</h2>
      <p className={paragraph}>
        Sorry, we can’t find the page you are looking for.
        {links && ' Maybe some of these most visited links will help you?'}
      </p>
      {links && (
        <ul className={list}>
          {links.map(({ href, text }, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={i}>
              <Link className={link} to={href}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <span className={fourOhFour}>404</span>
    </div>
  </Layout>
);

export default FourOhFourCustom;
