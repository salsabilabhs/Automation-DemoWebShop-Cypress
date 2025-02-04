import menu from "../support/PageObjects/menu"
import categories from "../support/PageObjects/categories"
import booksPage from "../support/PageObjects/booksPage"

describe('Access Books Page Category', () => {
    
    beforeEach(()=> {
        cy.open_demowebshop()
    })

    it('Access Books Page Category by Click on Top Menu', () => {
        menu.click_books()
        
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