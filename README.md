# Moon Monorepo Template

A monorepo template managed with [pnpm](https://pnpm.io/) and [moon](https://moonrepo.dev/).

## Architecture

This repository uses a monorepo structure with strict [project boundaries](.moon/workspace.yml) to ensure a clean separation of concerns.

- **`apps/`**: Applications (web, api).
- **`packages/`**: Shared libraries (client, server, shared).
- **`e2e/`**: End-to-end testing projects (Playwright).
- **`tools/`**: Shared build and development tooling.

## Scaffolding New Projects

This template includes pre-configured generators to ensure consistency across the codebase. Blueprints are located in `.moon/templates/`.

To create a new project, use the `moon init` command:

```bash
# Create a new web application
pnpm moon init web-app apps/my-new-app

# Create a new API (Cloudflare Worker)
pnpm moon init api-app apps/my-api

# Create a shared library
pnpm moon init shared-lib packages/utils
```

### Available Templates

| Template     | Destination | Description                                |
| ------------ | ----------- | ------------------------------------------ |
| `web-app`    | `apps/`     | SolidJS + Vite + Wrangler (Workers)        |
| `api-app`    | `apps/`     | Hono + Wrangler (Workers)                  |
| `shared-lib` | `packages/` | Shared TypeScript logic (Vite/Vitest)      |
| `server-lib` | `packages/` | Node/Worker-compatible logic (tsup/Vitest) |
| `client-lib` | `packages/` | Frontend-specific shared components/hooks  |
| `e2e-app`    | `e2e/`      | Playwright test suite                      |

### Tech Stack

- **Package Manager**: [pnpm](https://pnpm.io/) (with [Workspace Catalogs](https://pnpm.io/workspaces#catalogs))
- **Task Runner**: [moon](https://moonrepo.dev/)
- **Local Proxy**: [Portless](https://github.com/vercel-labs/portless)
- **Linter & Formatter**: [Biome](https://biomejs.dev/)
- **Test Runner**: [Vitest](https://vitest.dev/) & [Playwright](https://playwright.dev/)
- **Deployment**: [Cloudflare Workers](https://workers.cloudflare.com/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (latest LTS)
- [pnpm](https://pnpm.io/installation)
- [moon](https://moonrepo.dev/docs/install) (optional, can use `pnpm moon`)

### Setup

```bash
pnpm install
```

### Development

This project uses **Portless** to provide stable, named `.localhost` URLs. When you run a `dev` task, the Portless proxy will start automatically in the background.

Apps are accessible via their project name: `http://<project-name>.localhost`

Run common tasks for all projects or affected ones:

```bash
pnpm build      # Build all affected projects
pnpm test       # Run tests for all affected projects
pnpm lint       # Lint and format all affected projects
pnpm typecheck  # Typecheck all affected projects
pnpm e2e        # Run E2E tests for all affected projects
```

To run a specific project task:

```bash
pnpm moon run <project>:<task>
# e.g., pnpm moon run auth-web:dev
```

## Scripts

| Script      | Command                          | Description                            |
| ----------- | -------------------------------- | -------------------------------------- |
| `build`     | `moon run :build --affected`     | Build all affected projects.           |
| `test`      | `moon run :test --affected`      | Run tests for all affected projects.   |
| `e2e`       | `moon run :e2e --affected`       | Run E2E tests for affected projects.   |
| `lint`      | `moon run :lint --affected`      | Lint and format all affected projects. |
| `typecheck` | `moon run :typecheck --affected` | Typecheck all affected projects.       |
| `format`    | `biome format --write`           | Format files using Biome.              |
| `sync`      | `moon sync`                      | Sync moon configuration.               |
