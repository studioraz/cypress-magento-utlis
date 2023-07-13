/// <reference types="cypress" />
// @ts-ignore
import customer from '../../../fixtures/customer/customer.json';
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
