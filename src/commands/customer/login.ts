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
export const login = (username = 'roni_cost@example.com', password = 'roni_cost3@example.com'): void => {
    cy.visit('https://magento-demo.mageplaza.com/index.php/customer/account/login/');
    cy.get('body').then($body => {
        if ($body.find('.block-customer-login').length == 1) {
            cy.get('#email').clear().type(username);
            cy.get('#pass').clear().type(password);
            cy.get('#send2').click();
        }
    });
};