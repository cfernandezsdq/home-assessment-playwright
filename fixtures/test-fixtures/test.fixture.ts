import { test as base } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { SecurePage } from "../../pages/SecurePage";

type MyFixtures = {
  loginPage: LoginPage;
  securePage: SecurePage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate(process.env.BASE_URL);
    await use(loginPage);
  },
  securePage: async ({ page }, use) => {
    const securePage = new SecurePage(page);
    await use(securePage);
  },
});
export { expect } from "@playwright/test";