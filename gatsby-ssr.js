import React from 'react';

export const onRenderBody = ({ setPostBodyComponents }) => {

  return setPostBodyComponents([
    <script
      key="ibm-common"
      src="//1.www.s81c.com/common/stats/ibm-common.js"
    />,
  ])
};
