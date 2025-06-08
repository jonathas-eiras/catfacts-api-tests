const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

async function setupNodeEvents(on, config) {
  
  await preprocessor.addCucumberPreprocessorPlugin(on, config);


  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  allureWriter(on, config);

  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://catfact.ninja",
    specPattern: "cypress/e2e/features/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents,

    env: {
      allure: true,
      allureReuseAfterSpec: true,
    },

    experimentalRunAllSpecs: true,
  },
});
