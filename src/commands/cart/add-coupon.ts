/// <reference types="cypress" />

import route from '../../../tests/cypress/fixtures/route.json';
import selectors from '../../../tests/cypress/fixtures/selector.json';
import cart from '../../../tests/cypress/fixtures/cart.json';

Cypress.Commands.add('addCoupon', () => {
    cy.visit(route.cartUrl);
    cy.get(selectors.checkout_cart.coupon_dropdown_selector).click();
    cy.get(selectors.checkout_cart.coupon_input).type(cart.coupon_code_2);
    cy.wait(4000);
    cy.get(selectors.checkout_cart.add_delete_coupon_button).click();
    cy.wait(10000);
    cy.get(selectors.checkout_cart.coupon_message).should('be.visible');
});