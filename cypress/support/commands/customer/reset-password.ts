/// <reference types="cypress" />

import customerRoute from '../../../fixtures/customer/route.json';
import customerSelector from '../../../fixtures/customer/selector.json';

Cypress.Commands.add('resetPassword', (email) => {
    cy.visit(customerRoute.passwordReset);
    cy.get(customerSelector.reset_password_form.form).within(() => {
        cy.get(customerSelector.reset_password_form.email).type(email);
        cy.wait(10000);
    }).submit().then(() => {
        cy.url().should('include', customerRoute.accountLogin)
    });
});