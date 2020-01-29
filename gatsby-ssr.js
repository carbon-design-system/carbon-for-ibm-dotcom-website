import React from 'react';

export const onRenderBody = ({ setPostBodyComponents }) => {

  return setPostBodyComponents([
    <script
      key="1"
      src="//1.www.s81c.com/common/stats/ibm-common.js"
    />,
  ])
};
