/// <reference types="cypress" />
// @ts-ignore
import customers from '../../../fixtures/customer/customer.json';
import customerRoute from '../../../fixtures/customer/route.json';
import customerSelector from '../../../fixtures/customer/selector.json';
// @ts-ignore
Cypress.Commands.add('login', (username, password) => {
    // login to customer account
    cy.visit(customerRoute.accountLogin);

    // fill in the form
    cy.get(customerSelector.login_account_form.form).within(() => {
        cy.get(customerSelector.login_account_form.username).type(username);
        cy.get(customerSelector.login_account_form.password).type(password);
    }).submit().then(() => {

        // should redirect to account home page
        cy.url().should('include', customerRoute.accountHome)
    });
})
