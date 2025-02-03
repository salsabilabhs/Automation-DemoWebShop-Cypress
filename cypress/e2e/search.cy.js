import header from "../support/PageObjects/header"

describe("Search Feature", () => {

    beforeEach(() => {
        cy.visit("")
    })

    it("Search by Valid Inputs", () => {
        cy.fixture('searchFixtures').then((data) => {
            cy.get(header.search_field).type(data.valid_search)
            header.click_search()
        })
        
    })
})