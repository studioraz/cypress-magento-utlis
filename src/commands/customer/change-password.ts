/// <reference types="cypress" />

import customerRoute from '../../../tests/cypress/fixtures/route.json';
import customerSelector from '../../../tests/cypress/fixtures/selector.json';

Cypress.Commands.add('changePassword', (currentPassword, newPassword) => {
    cy.visit(customerRoute.accountEditChangePassword);
    cy.get(customerSelector.edit_account_form.form).within(() => {
        cy.get(customerSelector.edit_account_form.current_password).type(currentPassword);
        cy.get(customerSelector.edit_account_form.new_password).type(newPassword);
        cy.get(customerSelector.edit_account_form.confirm_new_password).type(newPassword);
    }).submit().then(() => {
        cy.url().should('include', customerRoute.accountLogin)
    });
});