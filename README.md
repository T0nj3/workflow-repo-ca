# Workflow Project - Development Workflow and Testing Setup

This project demonstrates a complete development workflow setup including linting, formatting, commit hooks, unit testing, and end-to-end testing.

## What’s been configured

- **ESLint** for JavaScript linting.
- **Prettier** for consistent code formatting.
- **Husky** and **lint-staged** for pre-commit hooks:
  - Lints and formats staged files before commit.
- **Vitest** for unit testing:
  - Tested `isActivePath` and `getUserName` utility functions.
- **Playwright** for end-to-end testing:
  - Verified successful login with valid credentials.
  - Verified login error with invalid credentials.
  - Verified venue navigation and details display.
