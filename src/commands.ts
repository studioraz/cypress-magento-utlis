/// <reference types="cypress" />

import './commands/customer/login';
import './commands/customer/logout';
import './commands/customer/customer-create';
import './commands/customer/change-password';
import './commands/customer/add-new-address';
import './commands/customer/reset-password';
import './commands/cart/add-coupon';
import './commands/cart/change-products-quantity';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
})