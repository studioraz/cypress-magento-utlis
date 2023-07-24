/// <reference types="cypress" />

import route from '../../../tests/cypress/fixtures/route.json';
import selectors from '../../../tests/cypress/fixtures/selector.json';

Cypress.Commands.add('openMinicart', () => {
    cy.get(selectors.minicart.minicart_open).click().within(() => {
        cy.get(selectors.add_product_to_cart.minicart).should('be.visible');
    });
});