/// <reference types="cypress" />
// @ts-ignore
import customers from '../../../tests/cypress/fixtures/customer.json';
import customerRoute from '../../../tests/cypress/fixtures/route.json';
import customerSelector from '../../../tests/cypress/fixtures/selector.json';
// @ts-ignore
Cypress.Commands.add('login', (username, password) => {
    // fill in the form
    cy.get(customerSelector.login_account_form.form).within(() => {
        cy.get(customerSelector.login_account_form.username).type(username);
        cy.get(customerSelector.login_account_form.password).type(password);
    }).submit().then(() => {
        // should redirect to account home page
        cy.url().should('include', customerRoute.accountHome)
    });
})
