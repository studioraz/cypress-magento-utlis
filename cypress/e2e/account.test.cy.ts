const customer = require('../fixtures/customer/customer.json');

describe('Account activities', () => {
    // @ts-ignore
    it('Login as customer by default', () => {
        // @ts-ignore
        cy.visit('home')
        // @ts-ignore
        cy.login(customer.default.username, customer.default.password);
    });

    it('Logout logged in', () => {
        // @ts-ignore
        cy.login(customer.default.username, customer.default.password);
        // @ts-ignore
        cy.logout();
    });
});