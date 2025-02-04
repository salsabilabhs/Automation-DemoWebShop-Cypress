import header from "../support/PageObjects/header"
import searchPage from "../support/PageObjects/searchPage"

describe("Search Feature", () => {

    beforeEach(() => {
        cy.open_demowebshop()
    })

    it("Search - Search Book by Valid Inputs", () => {
        cy.fixture('searchFixtures').then((data) => {
            header.verify_searchfield()
            header.fill_searchfield(data.valid_inputs[0])
            header.click_search()

            const expectedUrl = `/search?q=${data.valid_inputs[0].replace(/ /g, '+')}`;

            searchPage.verify_searchUrl(expectedUrl)
            searchPage.verify_searchkeyword(data.valid_inputs[0])
            searchPage.verify_success_resultsearch()
        })
    })
        
    it("Search - Search Computers by Valid Inputs", () => {
        cy.fixture('searchFixtures').then((data) => {
            header.verify_searchfield()
            header.fill_searchfield(data.valid_inputs[1])
            header.click_search()

            const expectedUrl = `/search?q=${data.valid_inputs[1].replace(/ /g, '+')}`;

            searchPage.verify_searchUrl(expectedUrl)
            searchPage.verify_searchkeyword(data.valid_inputs[1])
            searchPage.verify_success_resultsearch()
        })
    })

    it.only("Search - Search Electronics by Valid Inputs", () => {
        cy.fixture('searchFixtures').then((data) => {
            header.verify_searchfield()
            header.fill_searchfield(data.valid_inputs[2])
            header.click_search()

            const expectedUrl = `/search?q=${data.valid_inputs[2].replace(/ /g, '+')}`;

            searchPage.verify_searchUrl(expectedUrl)
            searchPage.verify_searchkeyword(data.valid_inputs[2])
            searchPage.verify_success_resultsearch()
        })
    })

    it("Search - Search Apparel & Shoes by Valid Inputs", () => {
        cy.fixture('searchFixtures').then((data) => {
            header.verify_searchfield()
            header.fill_searchfield(data.valid_inputs[3])
            header.click_search()

            const expectedUrl = `/search?q=${data.valid_inputs[3].replace(/ /g, '+')}`;

            searchPage.verify_searchUrl(expectedUrl)
            searchPage.verify_searchkeyword(data.valid_inputs[3])
            searchPage.verify_success_resultsearch()
        })
    })

    it("Search - Search Digital Downloads by Valid Inputs", () => {
        cy.fixture('searchFixtures').then((data) => {
            header.verify_searchfield()
            header.fill_searchfield(data.valid_inputs[4])
            header.click_search()

            const expectedUrl = `/search?q=${data.valid_inputs[4].replace(/ /g, '+')}`;

            searchPage.verify_searchUrl(expectedUrl)
            searchPage.verify_searchkeyword(data.valid_inputs[4])
            searchPage.verify_success_resultsearch()
        })
    })

    it("Search - Search Jewelry by Valid Inputs", () => {
        cy.fixture('searchFixtures').then((data) => {
            header.verify_searchfield()
            header.fill_searchfield(data.valid_inputs[5])
            header.click_search()

            const expectedUrl = `/search?q=${data.valid_inputs[5].replace(/ /g, '+')}`;

            searchPage.verify_searchUrl(expectedUrl)
            searchPage.verify_searchkeyword(data.valid_inputs[5])
            searchPage.verify_success_resultsearch()
        })
    })

    it("Search - Search Gift Cards by Valid Inputs", () => {
        cy.fixture('searchFixtures').then((data) => {
            header.verify_searchfield()
            header.fill_searchfield(data.valid_inputs[6])
            header.click_search()

            // const expectedUrl = `/search?q=${data.valid_inputs[6].replace(/ /g, '+')}`;

            // searchPage.verify_searchUrl(expectedUrl)
            searchPage.verify_searchkeyword(data.valid_inputs[6])
            searchPage.verify_success_resultsearch()
        })
    })

    it("Search - Search by Empty Input", () => {
        cy.fixture('searchFixtures').then((data) => {
            header.verify_searchfield()
            header.click_search()

            searchPage.verify_emptysearch_alert(data.empty_field_msg)
        })
    })

    it("Search - Search by Invalid Space Input", () => {
        cy.fixture('searchFixtures').then((data) => {
            header.verify_searchfield()
            header.fill_searchfield(data.space_input)
            header.click_search()
            
            searchPage.verify_unsuccess_resultsearch()
            searchPage.verify_invalidsearch_msg(data.invalid_search_msg)
        })
    })

    it("Search - Search When Data User Searched Doesn't Exist", () => {
        cy.fixture('searchFixtures').then((data) => {
            header.verify_searchfield()
            header.fill_searchfield(data.not_exist_input)
            header.click_search()

            const expectedUrl = `/search?q=${data.not_exist_input.replace(/ /g, '+')}`;

            searchPage.verify_searchUrl(expectedUrl)
            searchPage.verify_searchkeyword(data.not_exist_input)

            searchPage.verify_unsuccess_resultsearch()
            searchPage.verify_resultnotfound_msg(data.result_not_found_msg)
        })
    })

})