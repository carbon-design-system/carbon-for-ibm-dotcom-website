import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

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

const links = {
  firstCol: [
    { href: '/contributions', linkText: 'Contribute' },
    { href: 'https://www.ibm.com/privacy', linkText: 'Privacy' },
    { href: 'https://www.ibm.com/legal', linkText: 'Terms of use' },
    { href: 'https://ibm.com', linkText: 'IBM.com' },
  ],
//  secondCol: [
//    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
//    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
//    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
//    { href: 'https://ibm.com/design', linkText: 'Shadowed link' },
//  ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;
