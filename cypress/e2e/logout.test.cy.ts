describe('Command: logout', () => {
    it('Logout logged in', () => {
        // @ts-ignore
        cy.login();
        // @ts-ignore
        cy.logout();
        cy.get('.page-title .base').should('contain', 'You are signed out');
    });

    it('Logout should not fail if not logged in', () => {
        // @ts-ignore
        cy.logout();
    });
});