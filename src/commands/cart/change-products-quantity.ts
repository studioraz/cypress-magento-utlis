/// <reference types="cypress" />

import route from '../../../tests/cypress/fixtures/route.json';
import selectors from '../../../tests/cypress/fixtures/selector.json';
import cart from '../../../tests/cypress/fixtures/cart.json';

Cypress.Commands.add('changeQuantity', () => {
    cy.visit(route.cartUrl);
    cy.get(selectors.checkout_cart.cart_form).within(() => {
        cy.get(selectors.checkout_cart.cart_product_qty).clear().type(cart.product_qty);
    }).submit().then(() => {
        cy.get(selectors.checkout_cart.cart_product_qty).should('have.value', cart.product_qty);
    });
});