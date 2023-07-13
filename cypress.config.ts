import { defineConfig } from "cypress";

module.exports = defineConfig({
  fixturesFolder: 'cypress/fixtures',
  e2e: {
    chromeWebSecurity : false,
    baseUrl: 'https://magento-demo.mageplaza.com',
    setupNodeEvents(on, config) {

    },
    specPattern: 'cypress/e2e/*.test.*',
    supportFile: "cypress/support/commands.ts",
  },
});

