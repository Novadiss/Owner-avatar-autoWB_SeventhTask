const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "dm447e",
  e2e: {
    baseUrl: "http://qamid.tmweb.ru",
    retries: 0,
    setupNodeEvents(on, config) {},
  },
});
