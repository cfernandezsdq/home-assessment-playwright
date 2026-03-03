import { test } from "../../fixtures/test-fixtures/test.fixture";
import { loginData } from "../../fixtures/test-data/login-data";

test.describe("UI Login Feature:", () => {
  test("Test Case 1: Successful login", async ({ loginPage, securePage }) => {
    await loginPage.login(
      loginData.validUser.username,
      loginData.validUser.password,
    );
    await securePage.validateSuccessMessage(
      loginData.validUser.expectedMessage,
    );
  });
  test("Test Case 2: Login with invalid username", async ({ loginPage }) => {
    await loginPage.login(
      loginData.invalidUsername.username,
      loginData.invalidUsername.password,
    );
    await loginPage.validateErrorMessage(
      loginData.invalidUsername.expectedMessage,
    );
  });
  test("Test Case 3: Login with invalid password", async ({ loginPage }) => {
    await loginPage.login(
      loginData.invalidPassword.username,
      loginData.invalidPassword.password,
    );
    await loginPage.validateErrorMessage(
      loginData.invalidPassword.expectedMessage,
    );
  });
});
