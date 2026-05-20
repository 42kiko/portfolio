import { test, expect } from "@playwright/test";

test.describe("SEO & Meta", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("page title and meta description are set", async ({ page }) => {
    await expect(page).toHaveTitle(/Kiko/);
    await expect(page.locator('head meta[name="description"]')).toHaveAttribute(
      "content",
      /.+/
    );
  });

  test("Open Graph tags are present", async ({ page }) => {
    await expect(
      page.locator('head meta[property="og:title"]')
    ).toHaveAttribute("content", /.+/);
    await expect(
      page.locator('head meta[property="og:image"]')
    ).toHaveAttribute("content", /og-image/);
  });

  test("structured data is valid JSON-LD", async ({ page }) => {
    const raw = await page
      .locator('script[type="application/ld+json"]')
      .textContent();
    const data = JSON.parse(raw);
    expect(data["@type"]).toBe("Person");
  });

  test("below-the-fold images use lazy loading", async ({ page }) => {
    await page.waitForSelector("#app section");
    const lazy = page.locator('#app img[loading="lazy"]');
    expect(await lazy.count()).toBeGreaterThan(0);
  });
});
