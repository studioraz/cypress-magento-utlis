import { defineConfig } from "cypress";

module.exports = defineConfig({
  fixturesFolder: 'tests/cypress/fixtures',
  video: false,
  e2e: {
    setupNodeEvents(on, config) {

    },
    specPattern: 'tests/cypress/e2e/*.test.*',
    supportFile: "tests/cypress/support/commands.ts",
  },
});

