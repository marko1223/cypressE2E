# cypressE2E
E2E test for compare data

## Use

Install all dependencies with `npm install`

* `npx cypress open` - runs Cypress in GUI mode - follow progress of test in real time
* `npx cypress run` - runs Cypress headless mode - check results file for report at the end

## Workflow

* PageObject folder contains .js files with locators,functions and verifications which are used in tests.
* Test folder contains currently 1 suite with 3 tests.
* Test calling function from PageObject and in communication with them execute test.

## Note

* Test can be done as data driven with gathering data from response and maping it
* Suite currently verify one data for all countires per test (depends on request test can verify more then 1 data)