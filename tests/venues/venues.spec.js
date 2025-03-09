import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("User can navigate to a venue details page", async ({ page }) => {
    await page.goto("/");

    await page.waitForSelector("#venue-container");

    await page.locator("#venue-container a").first().click();

    await expect(page.locator("h1")).toContainText("Venue details");
  });
});
