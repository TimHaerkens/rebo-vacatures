# Rebogroep Vacatures

## Overview

This is a job vacancy listing application built with Nuxt 3, Vue 3, TypeScript, and Pinia. The application allows users to browse and filter job vacancies based on various criteria such as hours, salary, location, department, and job title.

## Getting started

### Prerequisites

- **Node.js** (version 18.x or later)
- **Yarn**

### Cloning the Repository

```bash
git clone https://github.com/TimHaerkens/rebo-vacatures
cd rebo-vacatures
```

### Project Setup

```bash
yarn
```

### Running the Project

To start the development server:

```bash
yarn dev
```

This will start the application on http://localhost:3000.

---

## Running Tests

### Unit Tests

The project includes unit tests using **Vitest**. To run these tests:

```bash
yarn test
```

### End-to-End (E2E) Tests

A simple End-to-End test is set up using Playwright and @nuxt/test-utils/e2e to verify the user can navigate between pages. To run the E2E test:

```bash
yarn dev
yarn test:e2e
```

**Note: You have to run a dev server on port 3000 for this test to work**
