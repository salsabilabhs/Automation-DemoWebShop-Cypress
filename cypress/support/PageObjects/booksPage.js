class booksPage {
    // ELEMENT
    breadcrumbs="[class='current-item']"
    title="body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div.center-2 > div.page.category-page > div.page-title > h1"
    sortby_dropdown="[id='products-orderby']"
    display_dropdown="[id='products-pagesize']"
    viewas_dropdown="[id='products-viewmode']"
    filterbyprice_txt="[class='filter-title']"
    all_products="[class='product-grid']"
    product="[class='product-item']"
    product_picture="body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div.center-2 > div.page.category-page > div.page-body > div.product-grid > div:nth-child(1) > div > div.picture > a"
    product_name="body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div.center-2 > div.page.category-page > div.page-body > div.product-grid > div:nth-child(1) > div > div.details > h2 > a"
    addtocart_btn="body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div.center-2 > div.page.category-page > div.page-body > div.product-grid > div:nth-child(1) > div > div.details > div.add-info > div.buttons > input"

    // VERIFY & INTERACT WITH ELEMENT
    verify_booksUrl() {
        cy.url().should('include', '/books')
    }

    verify_breadcrumbs() {
        cy.get(this.breadcrumbs).should('be.visible')
        cy.get(this.breadcrumbs).should('have.text', 'Books')
    }

    verify_title() {
        cy.get(this.title).should('be.visible')
        cy.get(this.title).should('have.text', 'Books')
    }

    verify_sortby_dropdown() {
        cy.get(this.sortby_dropdown).should('be.visible')
    }

    verify_display_dropdown() {
        cy.get(this.display_dropdown).should('be.visible')
    }

    verify_viewas_dropdown() {
        cy.get(this.viewas_dropdown).should('be.visible')
    }

    verify_filterbyprice_txt() {
        cy.get(this.filterbyprice_txt).should('be.visible')
    }

    verify_all_products() {
        cy.get(this.all_products).should('be.visible')
    }

    verify_product() {
        cy.get(this.product).should('be.visible')
    }

    click_product_picture() {
        cy.get(this.product_picture).click()
    }

    click_product_name() {
        cy.get(this.product_name).click()
    }

    verify_addtocart_btn() {
        cy.get(this.addtocart_btn).should('be.visible')
    }

    click_addtocart_btn() {
        cy.get(this.addtocart_btn).click()
    }
}
module.exports = new booksPage()