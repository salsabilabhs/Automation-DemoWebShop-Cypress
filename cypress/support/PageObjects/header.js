class header {
    // ELEMENT
    logo="[class='header-logo']"
    register="[class='ico-register']"
    login="[class='ico-login']"
    shopping_cart="[id='topcartlink']"
    shopping_cart_counter='[class="cart-qty"]'
    wishlist="[class='cart-label']"
    wishlist_counter="[class='wishlist-qty']"
    search_field="[id='small-searchterms']"
    search_btn="[class='button-1 search-box-button']"

    notification_addtocart_success='[class="bar-notification success"]'

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

    getcounter_shoppingcart() {
        return cy.get(this.shopping_cart_counter).invoke('text').then((text) => {
            const cleanedText = text.replace(/[()]/g, '').trim()    // Hapus semua non-angka
            return parseInt(cleanedText) || 0   // Konversi ke angka, default 0 jika kosong
        })
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

    verify_success_bar() {
        cy.get(this.notification_addtocart_success)
    }

    verify_success_addtocart_msg(success_addtocart_msg) {
        cy.get(this.notification_addtocart_success).invoke('text').then((text) => {
          expect(text.trim()).to.equal(success_addtocart_msg);
        });
    }
}
module.exports = new header()