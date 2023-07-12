///<reference path="../support/commands.ts"/>

describe('Command: login', () => {
    before(() => {
        cy.visit('https://magento-demo.mageplaza.com/')
        cy.logout();
    });

    it('Login as customer by default', () => {
        cy.visit('https://magento-demo.mageplaza.com/')
        cy.login();
        cy.get('h1').should('contain', 'My Account');
    });
});