const customer = require('../fixtures/customer.json');
const cart = require('../fixtures/cart.json');
const selectors = require('../fixtures/selector.json');

describe('Cart testing', () => {
    before('Add product to cart', () => {
        cy.visit(cart.url.product1Url);
        cy.get(selectors.add_product_to_cart.add_to_cart_btn).click();
        cy.wait(4000);
        cy.get(selectors.add_product_to_cart.message_product_added).should('be.visible');

        //assertion with using Local Storage, needs to improve
        /*cy.window().then((win) => {
            const summaryCount = win.localStorage.getItem('cart').summary_count;
            cy.wrap(summaryCount).should('not.be.a', '0');
        });*/
    });

    it('Open cart slider by clicking the icon in header', () => {
        cy.get(selectors.checkout_cart.minicart_open).click().within(() => {
            cy.get(selectors.add_product_to_cart.minicart).should('be.visible');
            cy.get(selectors.checkout_cart.delete_product).click();
        });
        cy.get(selectors.checkout_cart.modal_delete_product_minicart).click().then(() => {
            cy.get(selectors.add_product_to_cart.minicart).find(selectors.checkout_cart.minicart_product_qty)
                .should('not.exist');
        });
    });
});