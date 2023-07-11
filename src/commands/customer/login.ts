/**
 * Log a user in to the Magento 2 dashboard.
 *
 * @param username - Username of the user
 * @param password - Password of the user
 *
 * @example
 * Use the command without any argument:
 * ```
 * cy.login()
 * ```
 *
 * @example
 * Use the command with username and password:
 * ```
 * cy.login( 'customer', 'strongpassword')
 * ```
 */
export const login = (username = 'admin', password = 'password'): void => {
    cy.visit('/customer/account/login/');
    cy.get('body').then($body => {
        if ($body.find('.customer-account-login').length == 1) {
            cy.get('#email').clear().type(username);
            cy.get('#pass').clear().type(password);
            cy.get('#send2').click();
        }
    });
};