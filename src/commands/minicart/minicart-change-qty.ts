/// <reference types="cypress" />
import selectors from '../../../tests/cypress/fixtures/selector.json';

Cypress.Commands.add('minicartChangeQty', (qty) => {
    cy.get(selectors.minicart.minicart_open).within(() => {
        cy.get(selectors.minicart.minicart_product_qty).clear().type(qty);
        cy.get(selectors.minicart.update_product_qty).click();
    });
    cy.get(selectors.minicart.minicart_open).find(selectors.minicart.minicart_product_qty).should('have.value', qty);
});
