class menu {
    // ELEMENT
    books="body > div.master-wrapper-page > div.master-wrapper-content > div.header-menu > ul.top-menu > li:nth-child(1) > a"
    computers="/html/body/div[4]/div[1]/div[2]/ul[1]/li[2]/a"
    electronics="/html/body/div[4]/div[1]/div[2]/ul[1]/li[3]/a"
    apparel_shoes="/html/body/div[4]/div[1]/div[2]/ul[1]/li[4]/a"
    digital_downloads="/html/body/div[4]/div[1]/div[2]/ul[1]/li[5]/a"
    jewelry="/html/body/div[4]/div[1]/div[2]/ul[1]/li[6]/a"
    gift_cards="/html/body/div[4]/div[1]/div[2]/ul[1]/li[7]/a"

    // VERIFY & INTERACTION WITH ELEMENT
    click_books() {
        cy.get(this.books).click()
    }
}
module.exports = new menu()