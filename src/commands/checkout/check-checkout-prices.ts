/// <reference types="cypress" />
import selectors from '../../../tests/cypress/fixtures/selector.json';

Cypress.Commands.add('checkoutCheckPrices', () => {
    cy.get(selectors.checkout.price_subtotal).then(($checkoutPrice) => {
        const checkoutPrice = $checkoutPrice[0].innerText.trim()
        cy.get('@PDPPrice').then((PDPPrice) => { // get the value from the alias
            const checkoutPrice = parseFloat($checkoutPrice[0].innerText.trim().slice(1));
            expect(checkoutPrice).to.equal(PDPPrice);
        });
        cy.get(selectors.checkout.shipping_price).then(($shippingPrice) => {
            const shippingPrice = $shippingPrice[0].innerText.trim()
            cy.get(selectors.checkout.total_price).then(($totalPrice) => {
                const totalPrice = $totalPrice[0].innerText.trim().slice(1)
                expect((parseFloat(checkoutPrice.slice(1))) + (parseFloat(shippingPrice.slice(1)))).to.equal(parseFloat(totalPrice))
            })
        })
    })
});
