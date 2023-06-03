import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'iwhafy',
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
