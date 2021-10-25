import React from 'react';
import Switcher from 'gatsby-theme-carbon/src/components/Switcher';
import { SwitcherLink } from 'gatsby-theme-carbon/src/components/Switcher/Switcher';

/**
 * This is a custom switcher, which should not be used until later on. File should be renamed to Switcher.js when ready.
 *
 * @param {object} props Props object
 * @returns {*} JSX Switcher component
 */
const CustomSwitcher = (props) => (
  <Switcher {...props}>
    <SwitcherLink href="https://ibm.com/design">IBM Design</SwitcherLink>
    <SwitcherLink href="https://ibm.com/design/language">
      IBM Design Language
    </SwitcherLink>
    <SwitcherLink href="https://ibm.com/brand">IBM Brand Center</SwitcherLink>

    {/* <SwitcherDivider>Design disciplines</SwitcherDivider> */}
    <SwitcherLink href="https://www.carbondesignsystem.com/">
      IBM Product Design
    </SwitcherLink>

    {/* <SwitcherDivider>Design practices</SwitcherDivider> */}
    <SwitcherLink href="https://www.research.ibm.com/">
      IBM Design Research
    </SwitcherLink>
    <SwitcherLink href="https://www.ibm.com/design/thinking/">
      IBM Design Thinking
    </SwitcherLink>
    <SwitcherLink href="https://www.ibm.com/services/ibmix/">
      IBM iX
    </SwitcherLink>
    <SwitcherLink href="https://www.ibm.com/design/ai">
      IBM Journey System
    </SwitcherLink>
    <SwitcherLink href="https://w3.ibm.com/able/">
      IBM Accessibility
    </SwitcherLink>
  </Switcher>
);

export default CustomSwitcher;
