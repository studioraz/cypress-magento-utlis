/// <reference types="cypress" />
import selectors from '../../../tests/cypress/fixtures/selector.json';

Cypress.Commands.add('checkoutSeeCoupon', (qty) => {
});

Cypress.Commands.add('enterShippingAddress', (email, firstname, lastname, companyname, street, city, postcode, tel) => {
    cy.get(selectors.checkout.customer_email_field).type(email)
    cy.get(selectors.checkout.first_name_field).type(firstname)
    cy.get(selectors.checkout.last_name_field).type(lastname)
    cy.get(selectors.checkout.company_field).type(companyname)
    cy.get(selectors.checkout.address_field).eq(0).type(street)
    cy.get(selectors.checkout.city_field).type(city)
    cy.get(selectors.checkout.post_code_field).type(postcode)
    cy.get(selectors.checkout.country_field).select('United Kingdom')
    cy.get(selectors.checkout.telephone_field).type(tel)
})
