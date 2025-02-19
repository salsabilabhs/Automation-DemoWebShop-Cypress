import header from "../support/PageObjects/header"
import shoppingcartPage from "../support/PageObjects/shoppingcartPage"

describe('Check Out Features', () => {
    beforeEach(() => {
        cy.open_demowebshop()
    })

    it('Check Out Books', () => {
        cy.add_books_to_cart()
        header.click_shoppingcart()

        shoppingcartPage.verify_producttable()
        cy.sum_valueprice()
    })

})