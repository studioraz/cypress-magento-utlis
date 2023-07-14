/// <reference types="cypress" />
import customerRoute from '../../../fixtures/customer/route.json';


// @ts-ignore
Cypress.Commands.add('logout', () => {
    // logout from customer account
    cy.visit(customerRoute.accountLogout);
    // should redirect to log out success page
    cy.url().should('include', customerRoute.accountLogoutSuccess);
});
