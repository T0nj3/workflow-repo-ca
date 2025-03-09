console.log("Loaded ENV Variables:");
console.log("TEST_USER_EMAIL:", process.env.TEST_USER_EMAIL);
console.log("TEST_USER_PASSWORD:", process.env.TEST_USER_PASSWORD);
import { test, expect } from "@playwright/test";

test.describe("login", () => {
  test("user can login with valid credentials", async ({ page }) => {
    await page.goto("/login/");
    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);

    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });

  test("an error message is displayed when login fails", async ({ page }) => {
    await page.goto("/login/");
    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page.locator('input[name="password"]').fill("jkdhfsklsk");

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator("#message-container")).toContainText(
      "Invalid email or password",
    );
  });
});
