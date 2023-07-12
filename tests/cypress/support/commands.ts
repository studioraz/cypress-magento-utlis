/// <reference types="cypress" />
// ***********************************************

export {};
declare global {
    namespace Cypress {
        interface Chainable {
            logout: () => void;
            login: () => void;
        }
    }
}

Cypress.Commands.add('logout', () => {
    cy.visit('https://magento-demo.mageplaza.com/index.php/customer/account/logout/');
    cy.get('body').then($body => {
        if ($body.find('.action .switch').length == 1) {
            cy.get('.link .authorization-link a').click();
        }
    });
});

Cypress.Commands.add('login', (username = 'roni_cost@example.com', password = 'roni_cost3@example.com') => {
    cy.visit('https://magento-demo.mageplaza.com/index.php/customer/account/login/');
    cy.get('body').then($body => {
        if ($body.find('.block-customer-login').length == 1) {
            cy.get('#email').clear().type(username);
            cy.get('#pass').clear().type(password);
            cy.get('#send2').click();
        }
    });
})