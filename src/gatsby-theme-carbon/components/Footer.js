import React, { useEffect } from 'react';
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
        Have questions? Open an issue in <a href="https://github.com/carbon-design-system/ibm-dotcom-library-website/issues/new/choose">Github</a>.
      </p>
      <p>
        Last updated December 31st, 2019
        <br/>
        Copyright &copy; 2019 IBM
      </p>
    </>
  );

  /**
   * Links for the left side of the Footer
   * @type {{firstCol: *[]}}
   */
  const links = {
    firstCol: [
      { href: '/contributions', linkText: 'Contribute' },
      { href: 'https://www.ibm.com/privacy', linkText: 'Privacy' },
      { href: 'https://www.ibm.com/legal', linkText: 'Terms of use' },
      { href: 'https://ibm.com', linkText: 'IBM.com' },
      { href: '#', linkText: '' },
    ],
//  secondCol: [
//    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
//    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
//    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
//    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
//  ],
  };

  useEffect(() => {
    // Appends the data-autoid for the last footer item
    const footer = document.getElementsByTagName('footer');
    const ul = footer[0].getElementsByTagName('ul');
    const li = ul[0].getElementsByTagName('li');
    const atag = li[li.length - 1].getElementsByTagName('a')[0];
    atag.parentNode.removeChild(atag);
    li[li.length - 1].setAttribute('data-autoid', 'dds--privacy-cp');
  }, []);

  return (
    <Footer links={links} Content={Content} />
  );
};

export default CustomFooter;
