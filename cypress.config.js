const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'mochawesome',
  reporterOptions: {
    "reportDir": "cypress/results",
    "overwrite": true,
    "html": true,
    "json": false
 },

 
  
  
  e2e: {
    setupNodeEvents(on, config) {

    // implement node event listeners here
    },
    baseUrl: 'https://google.com/',
    defaultCommandTimeout: 25000,

  },
  chromeWebSecurity: false,
  
  
});
