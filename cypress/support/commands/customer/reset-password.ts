/// <reference types="cypress" />

import customerRoute from '../../../fixtures/customer/route.json';
import customerSelector from '../../../fixtures/customer/selector.json';

Cypress.Commands.add('resetPassword', (email) => {
    cy.visit(customerRoute.passwordReset);
    cy.get(customerSelector.reset_password_form.form).within(() => {
        cy.get(customerSelector.reset_password_form.email).type(email);
        //cy.get(customerSelector.edit_account_form.new_password).type(captcha);
        cy.wait(5000);
    }).submit()
});