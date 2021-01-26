# Cypress End to End Test Framework

Install Cypress first

- npm install cypress

Install Mochawesome Reporter

- npm install --save-dev mocha cypress-multi-reporters mocha-junit-reporter

Install Mochawesome Merger

- npm install --save-dev mocha mochawesome mochawesome-merge mochawesome-report-generator

Run Cypress in Headless Mode (Electrone Browser)

- npx cypress run

Generate the Report with Mochawesome Reports

- npx mochawesome-report-generator cypress/reports/mocha/mochawesome.json -f report -o cypress/reports
