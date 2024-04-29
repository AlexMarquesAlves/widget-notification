/* eslint-disable no-unused-vars */
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://widget-notification-five.vercel.app',
    env: {
      hideCredentials: true,
      requestMode: true,
    },
    experimentalRunAllSpecs: true,
  },

  fixturesFolder: false,
  video: true,
  viewportWidth: 1280,
  viewportHeight: 880,

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
})
