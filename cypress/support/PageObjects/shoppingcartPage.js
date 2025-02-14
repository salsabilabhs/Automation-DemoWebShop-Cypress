class shoppingcartPage {
    
    product_table='[class="page shopping-cart-page"]'
    product_name='[class="product-name"]'
    qty_field='[class="qty-input"]'

    verify_shoppingcartUrl() {
        cy.url().should('include', '/cart')
    }

    verify_producttable() {
        cy.get(this.product_table).should('be.visible')
    }

    verify_productname(name) {
        cy.get(this.product_name).should('have.text', name)
    }

    verify_qty(qty) {
        cy.get(this.qty_field).should('have.value', qty)
    }
}
module.exports = new shoppingcartPage()