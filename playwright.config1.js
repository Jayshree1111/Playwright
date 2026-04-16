// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const { on } = require('cluster');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  retries: 1,
  //workers:3,

  timeout: 40 * 1000,

  expect: {
    timeout: 40 * 1000,
  },

  reporter: 'html',
  projects: [
    {
      name: 'safari execution',

      use: {
        browserName: 'webkit',
        headless: false, // optional (same as --headed)
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
        //...devices['iPhone 11'],
      },
    },
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        headless: false, // optional (same as --headed)
        screenshot: 'only-on-failure',
        ignoreHTTPSErrors:true,
        permissions:['geolocation'],
        //video: 'retain-on-failure',
        trace: 'retain-on-failure',
       // viewport:{width:720,height:720}
      }
    }
  ]


});