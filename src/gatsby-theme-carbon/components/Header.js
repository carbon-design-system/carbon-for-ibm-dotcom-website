import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';

const CustomHeader = props => (
  <Header {...props}>
    <span>Carbon for</span>&nbsp;IBM.com
  </Header>
);

export default CustomHeader;
