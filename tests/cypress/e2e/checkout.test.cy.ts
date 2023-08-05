const cart = require('../fixtures/cart.json');
const selectors = require('../fixtures/selector.json');
const route = require('../fixtures/route.json');
const customer = require('../fixtures/customer.json');

describe('Checkout testing', () => {
    beforeEach('Add product to cart', function() {
        cy.visit(cart.url.product1Url);
        cy.get(selectors.add_product_to_cart.add_to_cart_btn).click();
        cy.get(selectors.add_product_to_cart.message_product_added).should('be.visible');
        let PDPPrice;
        cy.get(selectors.add_product_to_cart.product_price).then(($price) => {
            cy.wrap($price).should('contain', selectors.add_product_to_cart.currency);
            const priceText = $price.text().trim();
            PDPPrice = parseFloat(priceText.replace(/[^0-9.-]+/g, ''));
            cy.wrap(PDPPrice).as('PDPPrice');
        });
    });

    /*it('Add a coupon to the cart and check it on Checkout', () => {
        cy.visit(route.cartUrl);
        cy.addCoupon('H20');
        cy.get(selectors.checkout.cart_discount).then(($cartDiscount) => {
            const cartDiscount = parseFloat($cartDiscount[0].innerText.trim().slice(2));
            cy.visit(route.checkoutUrl);
            cy.enterShippingAddress('qwe@qwe.com', 'Firstname', 'Lastname', 'Company', 'street', 'City', '123123123', '0123456789');
            cy.get(selectors.checkout.shipping_method).click({ multiple: true });
            cy.get(selectors.checkout.button_next_step).click();
            cy.get(selectors.checkout.checkout_discount_price).then(($discount) => {
                const discount = parseFloat($discount[0].innerText.trim().slice(2));
                expect(discount).to.equal(cartDiscount);
            })
        })
    });*/

    /*it('Show correct prices on checkout (total, subtotal, shipping costs)', () => {
        cy.visit(route.checkoutUrl);
        cy.enterShippingAddress('qwe@qwe.com', 'Firstname', 'Lastname', 'Company', 'street', 'City', '123123123', '0123456789');
        cy.get(selectors.checkout.shipping_method).click({ multiple: true });
        cy.get(selectors.checkout.button_next_step).click();
        cy.checkoutCheckPrices();
    });*/

    it('Find the order in the Customer Order history', () => {
        cy.visit(route.accountLogin);
        cy.login(customer.default.username, customer.default.password);
        cy.visit(route.checkoutUrl);
        cy.get(selectors.checkout.shipping_method).click({ multiple: true });
        cy.get(selectors.checkout.button_next_step).click();
        cy.get(selectors.checkout.button_place_order).click();
    });
});