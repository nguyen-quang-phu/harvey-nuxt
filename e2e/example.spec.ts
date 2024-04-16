import { expect, test } from "@nuxt/test-utils/playwright";

test("hmm", async ({ page, goto }) => {
  await goto("/", { waitUntil: "hydration" });
  await expect(
    page.getByRole("heading", { name: "Welcome to Nuxt!" })
  ).toHaveText("Welcome to Nuxt!");
});
