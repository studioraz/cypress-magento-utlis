const cart = require('../fixtures/cart.json');
const selectors = require('../fixtures/selector.json');
const route = require('../fixtures/route.json');

describe('Checkout testing', () => {
    beforeEach('Add product to cart', function() {
        cy.visit(cart.url.product1Url);
        cy.get(selectors.add_product_to_cart.add_to_cart_btn).click();
        cy.wait(4000);
        cy.get(selectors.add_product_to_cart.message_product_added).should('be.visible');
    });

    it('Add a coupon to the cart', () => {
        cy.visit(route.cartUrl);
        cy.addCoupon('H20');
        cy.get(selectors.checkout.cart_discount).then(($cartDiscount) => {
            const cartDiscount = parseFloat($cartDiscount[0].innerText.trim().slice(2))
            cy.visit(route.checkoutUrl)
            cy.wait(7000)
            cy.enterShippingAddress('qwe@qwe.com', 'Firstname', 'Lastname', 'Company', 'street', 'City', '123123123', '0123456789')
            cy.wait(3000)
            cy.get('.button.action.continue.primary').click()
            cy.wait(10000)
            cy.get(selectors.checkout.checkout_discount_price).then(($discount) => {
                const discount = parseFloat($discount[0].innerText.trim().slice(2))
                expect(discount).to.equal(cartDiscount)
            })
        })
    });

});