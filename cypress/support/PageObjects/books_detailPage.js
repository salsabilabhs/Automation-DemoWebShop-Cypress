class books_detailPage {
    breadcrumbs='[class="current-item"]'
    product_name='[itemprop="name"]'
    product_picture='[id="main-product-img-13"]'
    price='[class="price-value-13"]'
    qty_field='[id="addtocart_13_EnteredQuantity"]'
    addtocart_btn='[id="add-to-cart-button-13"]'

    verify_productname() {
        cy.get(this.product_name).should('be.visible')
    }

    verify_price() {
        cy.get(this.price).should('be.visible')
    }

    verify_qtyfield() {
        cy.get(this.qty_field).should('be.visible')
    }

    verify_addtocart_btn() {
        cy.get(this.addtocart_btn).should('be.visible')
    }
    
    fill_qtyfield(qty) {
        cy.get(this.qty_field).clear()
        cy.get(this.qty_field).type(qty)
    }

    click_addtocart_btn() {
        cy.get(this.addtocart_btn).click()
    }
}
module.exports= new books_detailPage()