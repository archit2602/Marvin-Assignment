# Marvin-Assignment
This project contains end-to-end tests for Marvin's Amazon Assignment for cart functionality.

# Getting Started
## Prerequisites
- Node.js (v18 or higher)
- npm (Node Package Manager)

## Installing
Clone this repository
```
git clone https://github.com/archit2602/Marvin-Assignment.git
```
```
cd path/to/project
```

## Install dependencies
```
npm install
```
```
npm install cypress
```

## Running Tests
  ### To run all tests:
  ```
  npm run test
  ```
or
  ```
  npx cypress run
  ```
  ### To run the test in Cypress UI:
  ```
  npm run open
  ```
or
  ```
  npx cypress open
  ```
You will now see the Cypress UI development tool on your screen. Select 'E2E Testing' and then choose any of the available browsers such as Chrome, Edge, or Electron. Click on 'Start E2E Testing in <browser name>' to initiate the E2E testing process in the selected browser. Once the browser window appears, click on 'productCartFlow.cy.js' to view the test flow in the UI.

## Directory Structure

```
Marvin-Assignment/
├── cypress/
│   ├── fixtures/
│   ├── e2e/
│   │   ├── productCartIntegration.cy.js
│   ├── support/
│   ├── utilities/
│   │   ├── selectors.js
│   │   ├── urls.js
│   ├── videos/
│   └── screenshots/
├── node_modules/
├── package-lock.json
├── package.json
├── .gitignore
└── README.md
```
