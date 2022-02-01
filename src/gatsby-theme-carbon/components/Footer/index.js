import React, { useEffect } from 'react';
import { withPrefix } from 'gatsby';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

/**
 * Custom Footer which wraps the Gatsby theme Footer
 * @returns {*} JSX component for the Footer
 */
const CustomFooter = () => {
  /**
   * Content for the Footer component
   * @returns {*} Content JSX
   */
  const Content = () => (
    <>
      <p>
        Have questions? <a href="mailto:digdes@us.ibm.com/">Email us</a> for
        site feedback or open an issue in{' '}
        <a href="https://github.com/carbon-design-system/carbon-for-ibm-dotcom-website/issues/new/choose">
          GitHub
        </a>
        .
      </p>
      <p>
        Last updated <span id="last-modified"> </span>
        <br />
        Copyright &copy; 2022 IBM
      </p>
    </>
  );

  /**
   * Links for the left side of the Footer
   * @type {{firstCol: *[]}}
   */
  const links = {
    firstCol: [
      { href: withPrefix('/contributions'), linkText: 'Contribute' },
      { href: 'https://www.ibm.com/privacy', linkText: 'Privacy' },
      { href: 'https://www.ibm.com/legal', linkText: 'Terms of use' },
      { href: 'https://ibm.com', linkText: 'IBM.com' },
      { href: '#', linkText: '' },
    ],
    secondCol: [
      {
        href: 'https://medium.com/carbondesign/tagged/carbon-design-system',
        linkText: 'Medium',
      },
      {
        href: 'https://twitter.com/ibmdesign',
        linkText: 'Twitter',
      },
      {
        href: 'https://www.instagram.com/ibm/?hl=en',
        linkText: 'Instagram',
      },
    ],
  };

  useEffect(() => {
    // Auto populate the last modified date
    const lastModifiedTime = new Date(document.lastModified);
    const dateOptions = { month: 'long' };

    const month = new Intl.DateTimeFormat('en-US', dateOptions).format(
      lastModifiedTime
    );
    const day = lastModifiedTime.getUTCDate();
    const year = lastModifiedTime.getUTCFullYear();
    const hours = lastModifiedTime.getHours();
    const minutes =
      lastModifiedTime.getMinutes() < 10
        ? `0${lastModifiedTime.getMinutes()}`
        : lastModifiedTime.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    document.getElementById(
      'last-modified'
    ).innerHTML = `${month} ${day}, ${year} at ${hours}:${minutes}${ampm}`;

    // Appends the data-autoid for the last footer item
    // eslint-disable-next-line no-undef
    const footer = document.getElementsByTagName('footer');
    const ul = footer[0].getElementsByTagName('ul');
    const li = ul[0].getElementsByTagName('li');
    const atag = li[li.length - 1].getElementsByTagName('a')[0];
    atag.parentNode.removeChild(atag);
    li[li.length - 1].setAttribute('data-autoid', 'dds--privacy-cp');
  }, []);

  return <Footer links={links} Content={Content} />;
};

export default CustomFooter;
