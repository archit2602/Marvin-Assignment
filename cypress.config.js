const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1280, // width
  viewportHeight: 720, // hight
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
  },
});
