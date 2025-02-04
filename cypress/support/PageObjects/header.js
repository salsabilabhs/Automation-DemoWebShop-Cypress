class header {
    // ELEMENT
    logo="[class='header-logo']"
    register="[class='ico-register']"
    login="[class='ico-login']"
    shopping_cart="[id='topcartlink']"
    shopping_cart_counter="class='cart-qty']"
    wishlist="[class='cart-label']"
    wishlist_counter="[class='wishlist-qty']"
    search_field="[id='small-searchterms']"
    search_btn="[class='button-1 search-box-button']"

    // VERIFY & INTERACTION WITH ELEMENT
    verify_logo() {
        cy.get(this.logo).should('be.visible')
    }

    click_register() {
        cy.get(this.register).click()
    }

    click_login() {
        cy.get(this.login).click()
    }

    click_shoppingcart() {
        cy.get(this.shopping_cart).click()
    }

    getcounter_shoppingcart(value_shoppingcart) {
        cy.get(this.shopping_cart_counter).should('contain.text', value_shoppingcart)
    }

    click_wishlist() {
        cy.get(this.wishlist).click()
    }

    getcounter_wishlist() {
        cy.get(this.wishlist_counter).should('contain.text', value_wishlist)
    }

    verify_searchfield() {
        cy.get(this.search_field).should('be.visible')
    }

    fill_searchfield(value) {
        cy.get(this.search_field).type(value)
    }

    click_search() {
        cy.get(this.search_btn).click()
    }
}
module.exports = new header()