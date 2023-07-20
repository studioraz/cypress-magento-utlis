const customer = require('../fixtures/customer.json');
const addresses = require('../fixtures/addresses.json');
const customerRoute = require('../fixtures/route.json');

describe('Account activities', () => {
    // @ts-ignore
    /*it('Create a new customer account', () => {
        cy.visit('home')
        cy.customerCreate();
    });*/

    /*it('Login as customer by default', () => {
        cy.visit(customerRoute.accountLogin);
        cy.login(customer.default.username, customer.default.password);
    });*/

    /*it('Logout logged in', () => {
        // @ts-ignore
        cy.login(customer.default.username, customer.default.password);
        // @ts-ignore
        cy.logout();
    });*/

    /*it('Change password', () => {
        cy.login(customer.default.username, customer.default.password);
        cy.visit(customerRoute.accountEditChangePassword);
        cy.changePassword(customer.default.password, 'qwaszx1234$');
    });*/

    /*it('Add new address', () => {
        cy.login(customer.default.username, customer.default.password);
        cy.visit(customerRoute.addressNew);
        cy.addNewAddress(addresses.default.company, addresses.us_california.phone, addresses.us_california.street,
            addresses.us_california.country, addresses.us_california.region_id, addresses.us_california.city, addresses.us_california.postcode);
    });*/

    it('Reset password', () => {
        cy.visit(customerRoute.passwordReset);
        cy.resetPassword(customer.default.username);

    });
});