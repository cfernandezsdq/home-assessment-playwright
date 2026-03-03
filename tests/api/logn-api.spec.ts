import { test, expect } from "@playwright/test";
import { loginData } from "../../fixtures/test-data/login-data";

test.describe("Authentication API Flow Tests", () => {
  test("Valid credentials should redirect to /secure", async ({ request }) => {
    // Step 1: POST authenticate
    const postResponse = await request.post("/authenticate", {
      form: {
        username: loginData.validUser.username,
        password: loginData.validUser.password,
      },
      maxRedirects: 0,
    });

    expect(postResponse.status()).toBe(303);

    const redirectLocation = postResponse.headers()["location"];

    expect(redirectLocation).toBeDefined();
    expect(redirectLocation).toContain("/secure");

    // Step 2: Follow redirect manually
    const getResponse = await request.get(redirectLocation!);

    expect(getResponse.status()).toBe(200);

    const body = await getResponse.text();
    expect(body).toContain(loginData.validUser.expectedMessage);
  });

  test("Invalid password should redirect back to /login", async ({
    request,
  }) => {
    const postResponse = await request.post("/authenticate", {
      form: {
        username: loginData.invalidPassword.username,
        password: loginData.invalidPassword.password,
      },
      maxRedirects: 0,
    });

    expect(postResponse.status()).toBe(303);

    const redirectLocation = postResponse.headers()["location"];

    expect(redirectLocation).toBeDefined();
    expect(redirectLocation).toContain("/login");

    const getResponse = await request.get(redirectLocation!);

    expect(getResponse.status()).toBe(200);

    const body = await getResponse.text();
    expect(body).toContain(loginData.invalidPassword.expectedMessage);
  });

  test("Invalid username should redirect back to /login", async ({
    request,
  }) => {
    const postResponse = await request.post("/authenticate", {
      form: {
        username: loginData.invalidUsername.username,
        password: loginData.invalidUsername.password,
      },
      maxRedirects: 0,
    });

    expect(postResponse.status()).toBe(303);

    const redirectLocation = postResponse.headers()["location"];

    expect(redirectLocation).toBeDefined();
    expect(redirectLocation).toContain("/login");

    const getResponse = await request.get(redirectLocation!);

    expect(getResponse.status()).toBe(200);

    const body = await getResponse.text();
    expect(body).toContain(loginData.invalidUsername.expectedMessage);
  });
});
