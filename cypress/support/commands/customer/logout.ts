/// <reference types="cypress" />

// @ts-ignore
Cypress.Commands.add('logout', () => {
    cy.visit(`${baseUrl}/customer/account/logout/`);
    cy.get('body').then($body => {
        if ($body.find('.action .switch').length == 1) {
            cy.get('.link .authorization-link a').click();
        }
    });
});
