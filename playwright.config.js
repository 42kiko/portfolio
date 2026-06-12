import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  retries: 1,
  reporter: "html",

  use: {
    // 4321 statt 3000: auf der Devbox laufen parallel andere Apps auf 3000,
    // reuseExistingServer wuerde sonst gegen die falsche App testen
    baseURL: "http://localhost:4321",
    trace: "on-first-retry",
  },

  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "mobile", use: { ...devices["iPhone 13"] } },
  ],

  webServer: {
    command: "npx serve . --listen 4321",
    url: "http://localhost:4321",
    reuseExistingServer: !process.env.CI,
  },
});
