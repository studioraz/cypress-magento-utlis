const customer = require('../fixtures/customer.json');
const addresses = require('../fixtures/addresses.json');

describe('Account activities', () => {
    // @ts-ignore
    /*it('Create a new customer account', () => {
        cy.visit('home')
        cy.customerCreate();
    });*/

    /*it('Login as customer by default', () => {
        // @ts-ignore
        cy.visit('home')
        // @ts-ignore
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
        cy.changePassword(customer.default.password, 'qwaszx1234$');
    });*/

    /*it('Add new address', () => {
        cy.login(customer.default.username, customer.default.password);
        cy.addNewAddress(addresses.default.company, addresses.us_california.phone, addresses.us_california.street,
            addresses.us_california.country, addresses.us_california.region_id, addresses.us_california.city, addresses.us_california.postcode);
    });*/

    it('Reset password', () => {
        cy.resetPassword(customer.default.username);

    });
});