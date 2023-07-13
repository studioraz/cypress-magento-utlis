/// <reference types="cypress" />
// ***********************************************
const customer = require('../fixtures/customer/customer.json');
export {};
const baseUrl = Cypress.config().baseUrl;
// @ts-ignore
Cypress.Commands.add('logout', () => {
    cy.visit(`${baseUrl}/customer/account/logout/`);
    cy.get('body').then($body => {
        if ($body.find('.action .switch').length == 1) {
            cy.get('.link .authorization-link a').click();
        }
    });
});
// @ts-ignore
Cypress.Commands.add('login', () => {
    cy.visit(`${baseUrl}/customer/account/login/`);
    cy.get('.block-customer-login').then($loginBlock => {
        if ($loginBlock.length == 1) {
            cy.get('#email').clear().type(customer.default.username);
            cy.get('#pass').clear().type(customer.default.password);
            cy.get('#send2').click();
            cy.get('h1').should('contain', 'My Account');
        }
    });
})
