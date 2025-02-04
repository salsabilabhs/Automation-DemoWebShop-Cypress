class categories {
    // ELEMENT
    books="body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div.leftside-3 > div.block.block-category-navigation > div.listbox > ul > li:nth-child(1) > a"
    computers="body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div.side-2 > div.block.block-category-navigation > div.listbox > ul > li:nth-child(2) > a"
    electronics="body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div.side-2 > div.block.block-category-navigation > div.listbox > ul > li:nth-child(3) > a"
    apparel_shoes="body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div.side-2 > div.block.block-category-navigation > div.listbox > ul > li:nth-child(4) > a"
    digital_downloads="body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div.side-2 > div.block.block-category-navigation > div.listbox > ul > li:nth-child(5) > a"
    jewelry="body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div.side-2 > div.block.block-category-navigation > div.listbox > ul > li:nth-child(6) > a"
    gift_cards="body > div.master-wrapper-page > div.master-wrapper-content > div.master-wrapper-main > div.side-2 > div.block.block-category-navigation > div.listbox > ul > li:nth-child(7) > a"

    // VERIFY & INTERACTION WITH ELEMENT
    click_books() {
        cy.get(this.books).click()
    }
}
module.exports = new categories()