describe('Command: logout', () => {
    it('Logout logged in', () => {
        // @ts-ignore
        cy.login('roni_cost@example.com', 'roni_cost3@example.com');
        // @ts-ignore
        cy.logout();
    });
});