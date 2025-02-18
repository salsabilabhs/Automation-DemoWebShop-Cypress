import books_detailPage from "../support/PageObjects/books_detailPage"
import booksPage from "../support/PageObjects/booksPage"
import header from "../support/PageObjects/header"
import shoppingcartPage, { get_price } from "../support/PageObjects/shoppingcartPage"

describe('Add To Cart Features', () => {

    it('Add To Cart Books Category from Products', () => {
        cy.fixture('addtocartFixtures').then((data) => {
            cy.visit('/books')
            booksPage.get_productname(data.product_name)

            header.getcounter_shoppingcart().then((temp_count) => {
                
                booksPage.verify_addtocart_btn()
                booksPage.click_addtocart_btn()
                
                header.verify_success_addtocart_msg(data.success_addtocart_msg)
                
                header.getcounter_shoppingcart().then((actual_count) => {
                    expect(actual_count).to.equal(temp_count + 1)
                })
            })

            header.click_shoppingcart()
            shoppingcartPage.verify_shoppingcartUrl()
            shoppingcartPage.verify_producttable()
            shoppingcartPage.verify_productname(data.product_name)
        })
    })

    it.only('Add To Cart Books Category from Detail Product', () => {
        cy.visit('/computing-and-internet')
        cy.fixture('addtocartFixtures').then((data) => {
            books_detailPage.verify_qtyfield()
            books_detailPage.fill_qtyfield(data.qty)

            header.getcounter_shoppingcart().then((temp_count) => {
                
                books_detailPage.verify_addtocart_btn()
                books_detailPage.click_addtocart_btn()
                
                header.verify_success_addtocart_msg(data.success_addtocart_msg)
                
                header.getcounter_shoppingcart().then((actual_count) => {
                    expect(actual_count).to.equal(temp_count + Number(data.qty.trim()))
                })
            })

            header.click_shoppingcart()
            shoppingcartPage.verify_shoppingcartUrl()
            shoppingcartPage.verify_producttable()
            shoppingcartPage.verify_productname(data.product_name)
            shoppingcartPage.verify_qty(data.qty)

            shoppingcartPage.get_price()
        })

    })

})