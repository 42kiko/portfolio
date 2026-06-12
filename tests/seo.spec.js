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

  test("canonical, OG and sitemap URLs point to the live domain", async ({ page }) => {
    await expect(page.locator('head link[rel="canonical"]')).toHaveAttribute(
      "href",
      "https://42kiko.space/"
    );
    await expect(page.locator('head meta[property="og:url"]')).toHaveAttribute(
      "content",
      "https://42kiko.space/"
    );
    const robots = await page.request.get("/robots.txt");
    expect(await robots.text()).toContain("https://42kiko.space/sitemap.xml");
    const sitemap = await page.request.get("/sitemap.xml");
    expect(await sitemap.text()).toContain("<loc>https://42kiko.space/</loc>");
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
