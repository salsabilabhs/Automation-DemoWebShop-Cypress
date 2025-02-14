import booksPage from "../support/PageObjects/booksPage"
import books_detailPage from "../support/PageObjects/books_detailPage"

describe('Access Books Detail', () => {
    
    beforeEach(()=> {
        cy.visit('/books')
    })

    it('Access Books Detail by Click on Procuct Picture', () => {
        const expected_name = cy.get(booksPage.product_name).invoke('text')
        booksPage.product_picture()
        booksPage.click_product_picture()
        books_detailPage
        
    })

    it('Access Books Page Category by Click on Categories List', () => {
        categories.click_books()
        
        booksPage.verify_booksUrl()
        booksPage.verify_breadcrumbs()
        booksPage.verify_title()
        booksPage.verify_sortby_dropdown()
        booksPage.verify_display_dropdown()
        booksPage.verify_viewas_dropdown()
        booksPage.verify_filterbyprice_txt()
        booksPage.verify_all_products()
        booksPage.verify_product()
    })
})