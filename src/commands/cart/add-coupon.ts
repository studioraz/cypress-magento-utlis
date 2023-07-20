/// <reference types="cypress" />
import selectors from '../../../tests/cypress/fixtures/selector.json';
import cart from '../../../tests/cypress/fixtures/cart.json';

Cypress.Commands.add('addCoupon', (coupon_code) => {
    cy.get(selectors.checkout_cart.coupon_dropdown_selector).click();
    cy.get(selectors.checkout_cart.coupon_input).type(coupon_code);
    cy.wait(4000);
    cy.get(selectors.checkout_cart.add_delete_coupon_button).click();
    cy.wait(10000);
    cy.get(selectors.checkout_cart.coupon_message).should('be.visible');
});