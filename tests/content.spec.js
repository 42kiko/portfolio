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
    await expect(timeline).toContainText("Janus Pflegedienst");
  });

  test("timeline entries expose document download links", async ({ page }) => {
    const docs = page.locator(".timeline-doc");
    expect(await docs.count()).toBeGreaterThanOrEqual(3);
    const href = await docs.first().getAttribute("href");
    expect(href).toMatch(/assets\/docs\/.+\.pdf$/);
  });

  test("timeline cards show a small company logo", async ({ page }) => {
    const logos = page.locator("#qualification .tag-logo");
    // Jede der 9 Stationen traegt ein Firmenlogo zur Unterscheidung
    expect(await logos.count()).toBe(9);
    const src = await logos.first().getAttribute("src");
    // PawPro-Logo ist seit 087a28f ein SVG, die uebrigen sind PNGs
    expect(src).toMatch(/assets\/img\/companys\/.+\.(png|svg)$/);
  });

  test("Janus station links to its current website", async ({ page }) => {
    const janus = page.locator("#qualification a.tag-employer", {
      hasText: "Janus",
    });
    await expect(janus).toHaveAttribute(
      "href",
      "https://janus-beratungs-point.de/"
    );
  });

  test("portfolio features the PawPro projects", async ({ page }) => {
    const portfolio = page.locator("#portfolio");
    await expect(portfolio).toContainText("Pawsitive Care Foundation");
    await expect(portfolio).toContainText("PawCare");
  });

  test("portfolio features Nachhall with live link but no repo link", async ({ page }) => {
    const portfolio = page.locator("#portfolio");
    await expect(portfolio).toContainText("Nachhall");
    expect(
      await portfolio.locator('a[href="https://nachhall.42kiko.space/"]').count()
    ).toBeGreaterThan(0);
    // Closed Source: die Karte darf nicht auf ein Repo verlinken
    expect(
      await portfolio.locator('a[href*="github.com/true-vector"]').count()
    ).toBe(0);
  });

  test("experience years are computed from the career start (2018)", async ({ page }) => {
    const years = new Date().getFullYear() - 2018;
    const badge = String(years).padStart(2, "0") + "+";
    await expect(page.locator("#years-title")).toHaveText(badge);
    await expect(page.locator("#about-text")).toContainText(`über ${years} Jahren`);
  });

  test("skills section renders the radar chart and category cards", async ({
    page,
  }) => {
    await expect(page.locator("#skills .radar__svg")).toBeVisible();
    expect(await page.locator("#skills .radar__dot").count()).toBe(4);
    expect(await page.locator("#skills .skillcard").count()).toBe(4);
    // Chips tragen die konkreten Skill-Namen
    await expect(page.locator("#skills")).toContainText("Python");
  });
});
