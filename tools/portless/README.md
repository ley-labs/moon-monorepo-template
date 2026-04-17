# Portless Infrastructure

This project manages the workspace-wide [Portless](https://github.com/vercel-labs/portless) proxy.

## Overview

Portless provides stable, named `.localhost` URLs for local development (e.g., `http://auth-web.localhost`). It handles ephemeral port assignment and reverse proxying automatically.

## Tasks

### `proxy`

Starts the Portless proxy in the background.

- **Command**: `pnpm portless proxy start --no-tls`
- **Mode**: HTTP (no-TLS) to avoid `sudo` requirements and certificate warnings.
- **Inheritance**: This task is a singleton dependency for all application `dev` tasks.

## Usage

The proxy starts automatically when you run any `dev` task in the workspace.

To manually manage the proxy:

```bash
pnpm moon run portless:proxy
pnpm portless proxy stop
pnpm portless list
```
