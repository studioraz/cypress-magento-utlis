/// <reference types="cypress" />

import customerRoute from '../../../tests/cypress/fixtures/route.json';
import customerSelector from '../../../tests/cypress/fixtures/selector.json';

Cypress.Commands.add('resetPassword', (email) => {
    cy.visit(customerRoute.passwordReset);
    cy.get(customerSelector.reset_password_form.form).within(() => {
        cy.get(customerSelector.reset_password_form.email).type(email);
        cy.wait(10000);
    }).submit().then(() => {
        cy.url().should('include', customerRoute.accountLogin)
    });
});