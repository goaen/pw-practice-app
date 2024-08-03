import { defineConfig, devices } from '@playwright/test';
import type { TestOptions } from './test-options';

require ('dotenv').config();

export default defineConfig<TestOptions>({
  timeout: 30000,
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list'],
    ['junit', { outputFile: 'test-results/junit-report.xml' }],
    ['json', { outputFile: 'test-results/json-report.json' }],
    ['allure-playwright'],
    ['html']
  ],
  use: {
    baseURL :    process.env.DEV === '1' ? 'http://localhost:4200' 
            :    process.env.STAGING === '1' ? 'http://localhost:4202'
            :    'http://localhost:4200',
    globalsQaURL: 'https://www.globalsqa.com/demo-site/draganddrop/',

    trace: 'on-first-retry',
    video: {
      mode: 'off',
      size: { width: 1280, height: 720 },
    }

  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'dev',
      use: { 
        browserName: 'chromium',
        baseURL: 'http://localhost:4200',
      },
    },
    
    {
      name: 'staging',
      use: { 
        browserName: 'chromium',
        baseURL: 'http://localhost:4202',
      },
    },
    
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },

    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },

    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },

    {
      name: 'mobileIphone',
      testMatch: 'testMobile.spec.ts',
      use: {
        //baseURL: 'http://localhost:4200/pages/iot-dashboard',
        baseURL: 'http://localhost:4200',
        ...devices['iPhone 13 Pro'] },
    },

    {
      name: 'mobile',
      testMatch: 'testMobile.spec.ts',
      use: {
        baseURL: 'http://localhost:4200',
        ...devices['Pixel 5'] },
    },

    {
      name: 'viewport-test',
      testMatch: 'testMobile.spec.ts',
      use: {
        baseURL: 'http://localhost:4200',
        viewport: { width: 1200, height: 812 } 
      },
    }
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
