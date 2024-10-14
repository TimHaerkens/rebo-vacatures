# Rebogroep Vacatures

## Overview

This is a job vacancy listing application built with Nuxt 3, Vue 3, TypeScript, and Pinia. The application allows users to browse and filter job vacancies based on various criteria such as hours, salary, location, department, and job title.

### Features

- **Universe Selection:** Users can select a universe (e.g., Rick and Morty, Pokemon) from the homepage.
- **Character Overviews:** Once a universe is selected, users can view a list of characters within that universe.
- **Character Details:** Clicking on a character opens a detailed view, displaying information such as images, properties, and extra details about the character.
- **Pagination:** The character lists support pagination to browse through multiple characters.
- **Grid/List** View Toggle: The application allows switching between grid and list views on the overview pages for better user experience.



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
