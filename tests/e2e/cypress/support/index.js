/**
 * Copyright IBM Corp. 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import './commands';

beforeEach(() => {
  // Block ibm-common.js
  cy.intercept('https://1.www.s81c.com/common/stats/ibm-common.js', {
    fixture: 'ibm-common.js',
  });
});
