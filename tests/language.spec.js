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
    // Chromium-Mobile-Emulation stallt Touch-Dispatch nach dem #app-Rebuild
    // teils 15-35s (Page selbst gesund: keine Long-Tasks, Element stabil).
    // Daher Settle-Assertion zwischen den Klicks + 3x-Budget statt Robo-Doppelklick.
    test.slow();
    const langBtn = page.locator("#lang-toggle-btn");
    await langBtn.click();
    await expect(page.locator("html")).toHaveAttribute("lang", "en", { timeout: 60000 });

    await langBtn.click();
    await expect(page.locator("html")).toHaveAttribute("lang", "de", { timeout: 60000 });
  });
});
