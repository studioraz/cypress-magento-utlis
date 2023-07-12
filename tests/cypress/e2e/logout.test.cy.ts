describe('Command: logout', () => {
    it('Logout logged in', () => {
        cy.login();
        cy.logout();
        cy.get('.page-title .base').should('contain', 'You are signed out');
    });

    it('Logout should not fail if not logged in', () => {
        cy.logout();
        cy.visit(`https://magento-demo.mageplaza.com/`);
        cy.logout();
    });
});