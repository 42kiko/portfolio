import { test, expect } from "@playwright/test";

test.describe("Smoke", () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() =>
      localStorage.setItem("portfolio-onboarding-completed", "true")
    );
    await page.goto("/");
    await page.waitForSelector("#app section", { timeout: 5000 });
  });

  test("page loads and title is set", async ({ page }) => {
    await expect(page).toHaveTitle(/Kiko/);
  });

  test("header is visible", async ({ page }) => {
    await expect(page.locator("header#header")).toBeVisible();
  });

  test("main sections are rendered", async ({ page }) => {
    const sections = page.locator("#app section");
    await expect(sections).toHaveCount(9);
  });

  test("footer is rendered", async ({ page }) => {
    await expect(page.locator("footer#footer")).toBeVisible();
  });

  test("hero shows the animated typewriter title", async ({ page }) => {
    await expect(page.locator(".typewriter__cursor")).toBeVisible();
    await expect
      .poll(async () =>
        ((await page.locator(".typewriter").textContent()) || "").length
      )
      .toBeGreaterThan(0);
  });
});
