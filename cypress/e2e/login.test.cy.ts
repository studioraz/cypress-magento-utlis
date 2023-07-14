const baseUrl = Cypress.config().baseUrl;

describe('Command: login', () => {
    // @ts-ignore
    it('Login as customer by default', () => {
        // @ts-ignore
        cy.visit('home')
        // @ts-ignore
        cy.login('roni_cost@example.com', 'roni_cost3@example.com');
    });
});