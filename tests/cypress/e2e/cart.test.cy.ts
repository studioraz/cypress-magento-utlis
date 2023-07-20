const cart = require('../fixtures/cart.json');
const selectors = require('../fixtures/selector.json');
const route = require('../fixtures/route.json');

describe('Cart testing', () => {
    beforeEach('Add product to cart', function() {
        cy.visit(cart.url.product1Url);
        cy.get(selectors.add_product_to_cart.add_to_cart_btn).click();
        cy.wait(4000);
        cy.get(selectors.add_product_to_cart.message_product_added).should('be.visible');
    });

    it('Add a coupon to the cart', () => {
        //non existing coupons will not be added
        cy.visit(route.cartUrl);
        cy.addCoupon('D80');
    });

    /*it('Remove a discount coupon from the cart', () => {
        cy.addCoupon();
        cy.get(selectors.checkout_cart.add_delete_coupon_button).click();
        cy.get(selectors.checkout_cart.coupon_message).should('be.visible');
    });*/

    /*it('Change product qty in the cart', () => {
        cy.visit(route.cartUrl);
        cy.changeQuantity('7');
    });*/

    /*it('Remove product from the cart', () => {
        cy.visit(route.cartUrl);
        cy.removeProduct();
    });*/
});