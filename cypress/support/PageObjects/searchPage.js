class searchPage {
    // ELEMENT
    search_keyword="[id='Q']"
    result_product="[class='item-box']"
    invalid_warning="[class='warning']"
    not_found_result="[class='result']"

    // VERIFY & INTERACT WITH ELEMENT
    verify_searchUrl(expectedUrl) {
        cy.url().should('include', expectedUrl)
    }

    verify_searchkeyword(value) {
        cy.get(this.search_keyword).should('have.value', value)
    }

    verify_success_resultsearch() {
        cy.get(this.result_product).should('be.visible')
    }

    verify_unsuccess_resultsearch() {
        cy.get(this.result_product).should('not.exist')
    }

// VERIFY MESSAGE TEXT
    verify_emptysearch_alert(msg) {
        cy.on('window:alert', (text_msg) => {
            expect(text_msg).to.equal(msg)
        })
    }

    verify_invalidsearch_msg(msg) {
        cy.get(this.invalid_warning).should('contain', msg)
    }

    verify_resultnotfound_msg(msg) {
        cy.get(this.not_found_result).should('contain', msg)
    }
}
module.exports = new searchPage()