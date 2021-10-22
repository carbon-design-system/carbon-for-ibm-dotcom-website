import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export const onRenderBody = ({ setPostBodyComponents }) =>
  setPostBodyComponents([
    <script
      key="ibm-common"
      src="//1.www.s81c.com/common/stats/ibm-common.js"
    />,
  ]);
