// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const { on } = require('cluster');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',

  timeout: 40 * 1000,

  expect: {
    timeout: 40 * 1000,
  },

  reporter: 'html',

  use: {
    browserName: 'chromium',
    headless: false, // optional (same as --headed)
   // screenshot: 'only-on-failure',
   // video: 'retain-on-failure',
    trace:  'retain-on-failure',
  },
});