# Take-Home Assessment --  Playwright Framework

## Overview

This project contains an end-to-end automation framework built using
**Playwright + TypeScript**, following best practices.

The framework validates UI and API behavior while maintaining clean architecture and separation of
concerns.

------------------------------------------------------------------------

## Prerequisites:

-   Node.js (LTS recommended)
-   npm installed
-   Git

------------------------------------------------------------------------

## Installation:

Clone the repository:

``` bash
git clone <repository-url>
cd origami-sdet-playwright
```

Install dependencies:

``` bash
npm install
```

``` bash
npx playwright install
```
------------------------------------------------------------------------

## Running Tests:

Run all tests:

``` bash
npm run test
```

Run UI tests in headed mode:

``` bash
npm run test:ui:headed
```

Run UI test project only:

``` bash
npm run test:ui
```
Run API test project only:

``` bash
npm run test:api
```

Run a specific test:

UI:
``` bash
npm run test:ui:g "<Test Case Name / Tag>"
```

API:
``` bash
npm run test:api:g "<Test Case Name / Tag>"
```

Run a specific test file:

UI:
``` bash
npm run test tests/ui/xxxx.spec.ts
```

API:
``` bash
npm run test tests/api/xxxx.spec.ts
```

------------------------------------------------------------------------

## View Test Report:

``` bash
npx playwright show-report
```

------------------------------------------------------------------------

## Environment Configuration:

Environment variables are managed via `.env`.

Example:

BASE_URL=https://the-internet.herokuapp.com/login

------------------------------------------------------------------------

## Project Structure:

home-assessment-playwright/
│
├── config/
|
├── fixtures/
│   ├── test-data/
│   │   └── login-data.ts
│   │
│   ├── test-fixtures/
│       └── test.fixture.ts
│
├── pages/
│
├── tests/
│   ├── ui/
│   ├── api/
│
├── utils/
│
├── .env
├── playwright.config.ts
├── tsconfig.json

------------------------------------------------------------------------

## Framework Documentation:

For detailed architecture, design decisions, scalability strategy, and
implementation explanation, see:

👉 [ARCHITECTURE.md](./ARCHITECTURE.md)

------------------------------------------------------------------------

## Key Features:

-   Page Object Model
-   Base Page abstraction
-   Strict TypeScript configuration
-   UI + Network validation
-   Data-driven testing
-   Clean and scalable structure
-   CI-ready configuration

------------------------------------------------------------------------

## Future Enhancements:

-   Multi-environment support
-   Advanced reporting
-   Test tagging strategy
-   CI/CD integration
-   Structured logging

------------------------------------------------------------------------

This framework demonstrates scalable automation architecture aligned
with modern practices.
