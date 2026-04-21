# Playwright UI Automation Framework

A scalable end-to-end test automation framework built with **Playwright + JavaScript + Cucumber (BDD)**, following the **Page Object Model (POM)** design pattern. Designed for cross-browser UI testing with cloud-scale execution via **Azure Playwright Service** and CI/CD integration via GitHub Actions.

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| [Playwright](https://playwright.dev/) | Browser automation & E2E testing |
| JavaScript (Node.js) | Primary language |
| Cucumber.js | BDD framework (Gherkin feature files) |
| Page Object Model | Test design pattern |
| GitHub Actions | CI/CD pipeline |
| [Azure Playwright Service](https://azure.microsoft.com/en-us/products/playwright-testing) | Cloud-scale parallel browser testing |

---

## 📁 Project Structure

```
Playwright/
├── .github/
│   └── workflows/          # GitHub Actions CI/CD pipeline
├── features/               # Gherkin BDD feature files (.feature)
├── pageobjects/            # Page Object Model classes
├── tests/                  # Step definitions & test specs
├── utils/                  # Helper utilities & reusable functions
├── cucumber.js             # Cucumber configuration
├── playwright.config.js    # Playwright configuration (browsers, timeouts, base URL)
├── playwright.service.config.js  # Azure Playwright Service configuration
├── package.json            # Node.js dependencies
└── .gitignore
```

---

## ✅ Key Features

- **BDD with Cucumber** — Tests written in plain English Gherkin syntax (`Given / When / Then`), making them readable by non-technical stakeholders
- **Page Object Model** — UI locators and actions encapsulated in page classes for easy maintenance
- **Cross-browser support** — Configurable to run on Chromium, Firefox, and WebKit
- **CI/CD ready** — GitHub Actions workflow triggers tests automatically on push/pull request
- **Reusable utilities** — Common helper functions centralized in `utils/` for DRY test code
- **Auto-waiting** — Playwright's built-in smart waits eliminate flaky sleep-based waits
- **Azure Playwright Service** — Tests executed on Microsoft's cloud infrastructure for scalable, parallelized cross-browser runs without managing local browser infrastructure

---

## 🚀 Getting Started

### Prerequisites
- Node.js v16 or higher
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Jayshree1111/Playwright.git
cd Playwright

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### Running Tests

```bash
# Run all tests
npx playwright test

# Run BDD/Cucumber tests
npx cucumber-js

# Run tests in headed mode (visible browser)
npx playwright test --headed

# Run tests in a specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

# Run a specific feature file
npx cucumber-js features/login.feature
```

### View Test Report

```bash
# Open the Playwright HTML report
npx playwright show-report
```

---

## ☁️ Azure Playwright Service

This framework is integrated with **Microsoft Azure Playwright Service** for cloud-scale browser testing. The `playwright.service.config.js` file configures the connection to Azure, enabling:

- **Parallel execution** across multiple cloud-hosted browsers simultaneously
- **No local browser management** — browsers are provisioned and torn down automatically in Azure
- **Consistent test environments** — eliminates "works on my machine" failures across teams
- **Scalable test runs** — run hundreds of tests in parallel without local resource constraints

### Running Tests on Azure Playwright Service

```bash
# Set your Azure service endpoint (from Azure Portal)
export PLAYWRIGHT_SERVICE_URL=<your-azure-playwright-service-endpoint>

# Run tests using the Azure service config
npx playwright test --config=playwright.service.config.js
```

> **Note:** An active Azure subscription and a Playwright Testing resource in Azure Portal are required to use the service.

---

## ⚙️ CI/CD & Cloud Execution

**GitHub Actions** — Tests run automatically on every push and pull request to the `master` branch:
1. Checks out the code
2. Sets up Node.js
3. Installs dependencies and Playwright browsers
4. Executes the full test suite
5. Uploads the HTML test report as a build artifact

**Azure Playwright Service** — For cloud-scale runs, tests are executed against Microsoft's managed browser infrastructure using `playwright.service.config.js`, enabling parallel cross-browser execution without local setup.

---

## 📐 Design Principles

- **Separation of concerns** — Feature files, step definitions, page objects, and utilities are cleanly separated
- **Maintainability** — Changes to UI locators require updates in only one place (the page object class)
- **Scalability** — New feature tests can be added without modifying existing framework code
- **Readability** — BDD scenarios serve as living documentation of application behavior

---

## 👩‍💻 Author

**Jayshree** — Senior QA Automation Engineer | 5+ years of experience in enterprise test automation

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue)]([https://www.linkedin.com/in/jayshree-qa/](https://www.linkedin.com/in/jayshree-panchani-6416401aa/))

---

## 📄 License

This project is for demonstration and portfolio purposes.
