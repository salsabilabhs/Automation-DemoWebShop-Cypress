import header from "../support/PageObjects/header"
import shoppingcartPage from "../support/PageObjects/shoppingcartPage"

Cypress.Commands.add('open_demowebshop', () => {
    cy.visit("")
    header.verify_logo()
})

Cypress.Commands.add('add_books_to_cart', () => {
    cy.visit("/books")
    for (const i of [1, 3, 5]) {
        cy.xpath("/html/body/div[4]/div[1]/div[4]/div[2]/div[2]/div[2]/div[3]/div["+ i +"]/div/div[2]/div[3]/div[2]/input")
          .should('be.visible')
          .click()
          .wait(1000)
    }
})

Cypress.Commands.add('sum_valueprice', () => {
    cy.xpath(shoppingcartPage.row_table).then(($rows) => {
        let total = 0;
        for (let i = 1; i <= $rows.length; i++) {
          const price_table = `//tbody/tr[${i}]/td[6]`

          cy.xpath(price_table).invoke('text').then(($price_row) => {
                const price = parseFloat($price_row.replace(/[^0-9.-]+/g, '')) || 0
                total += price
                cy.log(total)
            })
        }
        return total
    })
})

// Cypress.Commands.add('verify_sub_total', () => {
    
// })
