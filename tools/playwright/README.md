# Playwright Infrastructure

This project manages the workspace-wide [Playwright](https://playwright.dev/) browser installations and dependencies.

## Overview

Playwright requires specific browser binaries (Chromium, Firefox, WebKit) and system dependencies that are not typically included in standard CI environments or basic `pnpm install` steps. This tool ensures all browsers are available for E2E testing.

## Tasks

### `install-browsers`

Installs Playwright browsers and their OS-level dependencies.

- **Command**: `pnpm playwright install --with-deps`
- **Cache**: `false` (browsers are large and usually cached at the CI action level).
- **Run in CI**: `true`.

## Usage

This task is a prerequisite for all `e2e` tasks in the workspace. It runs automatically in CI before any tests are executed.

To manually install or update browsers:

```bash
pnpm moon run playwright:install-browsers
```
