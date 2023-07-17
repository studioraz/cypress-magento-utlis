import { defineConfig } from "cypress";

module.exports = defineConfig({
  fixturesFolder: 'tests/cypress/fixtures',
  e2e: {
    chromeWebSecurity : false,
    baseUrl: 'https://magento2-demo.magebit.com',
    setupNodeEvents(on, config) {

    },
    specPattern: 'tests/cypress/e2e/**/*.test.cy.{js,jsx,ts,tsx}',
    supportFile: "../../src/commands.ts",
  },
});

