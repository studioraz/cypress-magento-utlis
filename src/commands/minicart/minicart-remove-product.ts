/// <reference types="cypress" />
import selectors from '../../../tests/cypress/fixtures/selector.json';

Cypress.Commands.add('minicartRemoveProduct', () => {
    cy.get(selectors.minicart.minicart_open).within(() => {
        cy.get(selectors.cart.delete_product).click();
    });
    cy.get(selectors.minicart.modal_delete_product_minicart).click().then(() => {
        cy.get(selectors.add_product_to_cart.minicart).find(selectors.minicart.minicart_product_qty)
        .should('not.exist');
    });
});