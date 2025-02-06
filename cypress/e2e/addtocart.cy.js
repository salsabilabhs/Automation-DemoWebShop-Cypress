import booksPage from "../support/PageObjects/booksPage"
import { books } from "../support/PageObjects/menu"

describe('Add To Cart Features', () => {

    it('Add To Cart Books Category from Products', () => {
        cy.visit('/books')
        booksPage.verify_addtocart_btn()
        booksPage.click_addtocart_btn()
    })

    it('Add To Cart Books Category from Detail Product', () => {
        cy.visit('/books')
        booksPage.verify_product()
        booksPage.click_product()

    })

})