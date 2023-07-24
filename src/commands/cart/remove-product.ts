/// <reference types="cypress" />

Cypress.Commands.add('removeProduct', () => {
    cy.get(selectors.cart.cart_form).within(() => {
        cy.get(selectors.cart.delete_product).click()
    }).then(() => {
        cy.get(selectors.cart.cart_form).should('not.exist');
    });
});