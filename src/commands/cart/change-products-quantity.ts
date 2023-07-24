/// <reference types="cypress" />

import route from '../../../tests/cypress/fixtures/route.json';
import selectors from '../../../tests/cypress/fixtures/selector.json';

Cypress.Commands.add('changeQuantity', (product_qty) => {
    cy.get(selectors.cart.cart_form).within(() => {
        cy.get(selectors.cart.cart_product_qty).clear().type(product_qty);
    }).submit().then(() => {
        cy.get(selectors.cart.cart_product_qty).should('have.value', product_qty);
    });
});