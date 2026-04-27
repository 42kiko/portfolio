import { test, expect } from "@playwright/test";

test.describe("Contact Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() =>
      localStorage.setItem("portfolio-onboarding-completed", "true")
    );
    await page.goto("/");
    await page.waitForSelector("#app section");
  });

  test("contact form fields are present", async ({ page }) => {
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
  });

  test("submit button is present", async ({ page }) => {
    const btn = page.locator('button[type="submit"]');
    await expect(btn).toBeVisible();
  });

  test("form shows validation on empty submit", async ({ page }) => {
    const submit = page.locator('button[type="submit"]');
    await submit.click();

    // HTML5 required validation prevents submit — form fields should be invalid
    const nameField = page.locator('input[name="name"]');
    const isInvalid = await nameField.evaluate((el) => !el.validity.valid);
    expect(isInvalid).toBe(true);
  });
});
