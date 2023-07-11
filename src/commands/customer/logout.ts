/**
 * Logout
 *
 * @example
 * ```
 * cy.logout()
 * ```
 */
export const logout = (): void => {
    cy.visit('/customer/account/logout/');
    cy.get('body').then($body => {
        if ($body.find('.action .switch').length !== 1) {
            cy.get('.link .authorization-link a').click();
        }
    });
};