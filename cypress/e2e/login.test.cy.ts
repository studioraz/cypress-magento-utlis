///<reference path="../support/commands.ts"/>
const baseUrl = Cypress.config().baseUrl;

describe('Command: login', () => {
    before(() => {
        // @ts-ignore
        cy.visit(baseUrl);
        // @ts-ignore
        cy.logout();
    });

    // @ts-ignore
    it('Login as customer by default', () => {
        // @ts-ignore
        cy.visit(baseUrl)
        // @ts-ignore
        cy.login();
    });
});