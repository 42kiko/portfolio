import { test, expect } from "@playwright/test";

test.describe("Content – Werdegang & Portfolio", () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() =>
      localStorage.setItem("portfolio-onboarding-completed", "true")
    );
    await page.goto("/");
    await page.waitForSelector("#app section");
  });

  test("timeline includes the PawPro and Janus stations", async ({ page }) => {
    const timeline = page.locator("#qualification .timeline");
    await expect(timeline).toContainText("Chief of Staff Intern");
    await expect(timeline).toContainText("Janus Pflege");
  });

  test("timeline entries expose document download links", async ({ page }) => {
    const docs = page.locator(".timeline-doc");
    expect(await docs.count()).toBeGreaterThanOrEqual(3);
    const href = await docs.first().getAttribute("href");
    expect(href).toMatch(/assets\/docs\/.+\.pdf$/);
  });

  test("portfolio features the PawPro projects", async ({ page }) => {
    const portfolio = page.locator("#portfolio");
    await expect(portfolio).toContainText("Pawsitive Care Foundation");
    await expect(portfolio).toContainText("PawCare");
  });
});
