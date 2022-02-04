/**
 * Copyright IBM Corp. 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport(1280, 780);

    cy.waitUntil(() => cy.get('header').should('not.be.empty'));
  });

  it('should have a functioning left navigation', () => {
    cy.get('.bx--side-nav__submenu').first().click();

    cy.get('.bx--side-nav__link').first().should('be.visible').click();

    cy.location('pathname').should('not.eq', '/');
  });
});
