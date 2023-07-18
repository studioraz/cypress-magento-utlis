/// <reference types="cypress" />

import route from '../../../tests/cypress/fixtures/route.json';
import selectors from '../../../tests/cypress/fixtures/selector.json';

Cypress.Commands.add('minicartRemoveProduct', () => {
    cy.get(selectors.checkout_cart.minicart_open).within(() => {
        cy.get(selectors.checkout_cart.delete_product).click();
    });
    cy.get(selectors.checkout_cart.modal_delete_product_minicart).click().then(() => {
        cy.get(selectors.add_product_to_cart.minicart).find(selectors.checkout_cart.minicart_product_qty)
        .should('not.exist');
    });
});