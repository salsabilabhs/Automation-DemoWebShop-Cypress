import header from "../support/PageObjects/header"

Cypress.Commands.add('open_demowebshop', () => {
    cy.visit("")
    header.verify_logo()
})