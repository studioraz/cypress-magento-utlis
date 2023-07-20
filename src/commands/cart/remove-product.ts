/// <reference types="cypress" />

Cypress.Commands.add('removeProduct', () => {
    cy.get(selectors.checkout_cart.cart_form).within(() => {
        cy.get(selectors.checkout_cart.delete_product).click()
    }).then(() => {
        cy.get(selectors.checkout_cart.cart_form).should('not.exist');
    });
});