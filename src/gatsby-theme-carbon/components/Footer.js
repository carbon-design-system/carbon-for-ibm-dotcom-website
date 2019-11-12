import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = () => (
  <>
    <p>
      Have questions? Open an issue in [Github](https://github.com/carbon-design-system/carbon-for-ibm-website/issues/new/choose)
    </p>
    <p>
      Last updated November 12th, 2019
      <br/>
      Copyright &copy; 2019 IBM
    </p>
  </>
);

const links = {
  firstCol: [
    { href: 'https://ibm.com/design', linkText: 'Contribute' },
    { href: 'https://ibm.com/design', linkText: 'Privacy' },
    { href: 'https://ibm.com/design', linkText: 'Terms of use' },
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
