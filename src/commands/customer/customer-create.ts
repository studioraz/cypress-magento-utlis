/// <reference types="cypress" />

import customerRoute from '../../../tests/cypress/fixtures/route.json';
import customerSelector from '../../../tests/cypress/fixtures/selector.json';

Cypress.Commands.add('customerCreate', (customerData) => {
    if (!customerData) {
        const uuid = () => Cypress._.random(0, 1e6);
        const id = uuid();
        customerData = {
            email: 'test' + id + '@studioraz.co.il',
            firstname: 'test' + id,
            lastname: 'test' + id,
            password: 'qwaszx1234$'
        };
    }

    cy.visit(customerRoute.accountCreate);

    // fill in the form
    cy.get(customerSelector.create_account_form.form).within(() => {
        cy.get(customerSelector.create_account_form.first_name).type(customerData.firstname);
        cy.get(customerSelector.create_account_form.last_name).type(customerData.lastname);
        cy.get(customerSelector.create_account_form.email).type(customerData.email);
        cy.get(customerSelector.create_account_form.password).type(customerData.password);
        cy.get(customerSelector.create_account_form.confirm_password).type(customerData.password);
    }).submit().then(() => {
        // should redirect to account home page
        cy.url().should('include', customerRoute.accountHome)
    });
});

