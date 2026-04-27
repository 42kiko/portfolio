import { test, expect } from "@playwright/test";

test.describe("Language Switch", () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() =>
      localStorage.setItem("portfolio-onboarding-completed", "true")
    );
    await page.goto("/");
    await page.waitForSelector("#app section");
  });

  test("default language is German", async ({ page }) => {
    await expect(page.locator("html")).toHaveAttribute("lang", "de");
  });

  test("language toggle switches to English", async ({ page }) => {
    const langBtn = page.locator("#lang-toggle-btn");
    await expect(langBtn).toBeVisible();
    await langBtn.click();

    await expect(page.locator("html")).toHaveAttribute("lang", "en");
  });

  test("toggling language twice returns to German", async ({ page }) => {
    const langBtn = page.locator("#lang-toggle-btn");
    await langBtn.click();
    await langBtn.click();

    await expect(page.locator("html")).toHaveAttribute("lang", "de");
  });
});
