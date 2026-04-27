import { test, expect } from "@playwright/test";

test.describe("Theme & Color", () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() =>
      localStorage.setItem("portfolio-onboarding-completed", "true")
    );
    await page.goto("/");
    await page.waitForSelector("#app section");
  });

  test("dark mode toggle switches body class", async ({ page }) => {
    const themeBtn = page.locator("#theme-button");
    await expect(themeBtn).toBeVisible();

    const before = await page.locator("body").getAttribute("class");
    await themeBtn.click();
    const after = await page.locator("body").getAttribute("class");

    expect(before).not.toEqual(after);
  });

  test("color theme cycles hue on click", async ({ page }) => {
    const colorBtn = page.locator("#theme-toggle-btn");
    await expect(colorBtn).toBeVisible();

    const getHue = () =>
      page.evaluate(() =>
        getComputedStyle(document.documentElement)
          .getPropertyValue("--hue-color")
          .trim()
      );

    const hue1 = await getHue();
    await colorBtn.click();
    const hue2 = await getHue();

    expect(hue1).not.toEqual(hue2);
  });
});
