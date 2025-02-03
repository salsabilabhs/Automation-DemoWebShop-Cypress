const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://demowebshop.tricentis.com/',
    specPattern:'cypress/e2e/*.cy.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
