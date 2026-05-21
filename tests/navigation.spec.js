import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() =>
      localStorage.setItem("portfolio-onboarding-completed", "true")
    );
    await page.goto("/");
    await page.waitForSelector("#app section");
  });

  test("nav links are present", async ({ page }) => {
    const navLinks = page.locator("nav a");
    const count = await navLinks.count();
    expect(count).toBeGreaterThan(3);
  });

  test("mobile menu toggle opens nav", async ({ page, viewport }) => {
    // only relevant on mobile
    test.skip((viewport?.width ?? 1280) >= 768, "desktop only shows nav");

    const toggleBtn = page.locator("#nav-toggle");
    const navMenu = page.locator("#nav-menu");

    await toggleBtn.click();
    await expect(navMenu).toHaveClass(/show-menu/);
  });

  test("scroll-up button appears after scrolling", async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 600));
    await page.waitForTimeout(300);

    const scrollUp = page.locator("#scroll-top");
    await expect(scrollUp).toHaveClass(/show-scroll/);
  });
});
