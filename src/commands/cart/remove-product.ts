/// <reference types="cypress" />

import route from '../../../tests/cypress/fixtures/route.json';
import selectors from '../../../tests/cypress/fixtures/selector.json';

Cypress.Commands.add('removeProduct', () => {
    cy.visit(route.cartUrl);
    cy.get(selectors.checkout_cart.cart_form).within(() => {
        cy.get(selectors.checkout_cart.delete_product).click()
    }).then(() => {
        cy.get(selectors.checkout_cart.cart_form).should('not.exist');
    });
});