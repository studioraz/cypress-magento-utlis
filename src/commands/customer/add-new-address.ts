/// <reference types="cypress" />

import customerRoute from '../../../tests/cypress/fixtures/route.json';
import customerSelector from '../../../tests/cypress/fixtures/selector.json';

Cypress.Commands.add('addNewAddress', (company, phoneNumber, streetAddress, country, region, city, postcode) => {
    cy.get(customerSelector.add_new_address_form.form).within(() => {
        cy.get(customerSelector.add_new_address_form.company).type(company);
        cy.get(customerSelector.add_new_address_form.phone_number).type(phoneNumber);
        cy.get(customerSelector.add_new_address_form.street_address).type(streetAddress);
        cy.get(customerSelector.add_new_address_form.country).select(country);
        cy.get(customerSelector.add_new_address_form.region).select(region);
        cy.get(customerSelector.add_new_address_form.city).type(city);
        cy.get(customerSelector.add_new_address_form.postcode).type(postcode);
    }).submit().then(() => {
        cy.url().should('include', customerRoute.addressList)
    });
});