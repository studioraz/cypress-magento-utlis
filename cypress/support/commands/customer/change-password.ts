/// <reference types="cypress" />

import customerRoute from '../../../fixtures/customer/route.json';
import customerSelector from '../../../fixtures/customer/selector.json';

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