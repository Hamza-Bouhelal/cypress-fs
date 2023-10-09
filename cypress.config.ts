import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        log(message) {
          console.log(message);
          return null;
        }
      })
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      return require("./src/plugins/index.ts")(on, config);
    },
  },
});
