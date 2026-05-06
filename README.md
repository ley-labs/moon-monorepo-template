# Moon Monorepo Template

A monorepo template managed with [bun](https://bun.sh/) and [moon](https://moonrepo.dev/).

## Architecture

This repository uses a monorepo structure with strict [project boundaries](.moon/workspace.yml) to ensure a clean separation of concerns.

- **`apps/`**: Applications (web, api).
- **`packages/`**: Shared libraries (client, server, shared).
- **`e2e/`**: End-to-end testing projects (Playwright).
- **`tools/`**: Shared build and development tooling.

## Scaffolding New Projects

This template includes pre-configured generators to ensure consistency across the codebase. Blueprints are located in `.moon/templates/`.

To create a new project, use the `moon generate` command:

```bash
# Create a new web application
bun moon generate web-app

# Create a new API (Cloudflare Worker)
bun moon generate api-app

# Create a shared library
bun moon generate shared-lib

# Create a server-only library
bun moon generate server-lib

# Create a client-side library
bun moon generate client-lib

# Create an E2E testing project
bun moon generate e2e-app
```

### Available Templates

| Template     | Destination             | Description                                |
| ------------ | ----------------------- | ------------------------------------------ |
| `web-app`    | `apps/*-web`            | SolidJS + Vite + Wrangler (Workers)        |
| `api-app`    | `apps/*-api`            | Hono + Wrangler (Workers)                  |
| `shared-lib` | `packages/*-shared`     | Shared TypeScript logic (Vite/Vitest)      |
| `server-lib` | `packages/*-server`     | Node/Worker-compatible logic (tsup/Vitest) |
| `client-lib` | `packages/*-client`     | Frontend-specific shared components/hooks  |
| `e2e-app`    | `e2e/*-e2e`             | Playwright test suite                      |

### Tech Stack

- **Package Manager**: [bun](https://bun.sh/) (with [Workspace Catalogs](https://bun.sh/workspaces#catalogs))
- **Task Runner**: [moon](https://moonrepo.dev/)
- **Local Proxy**: [Portless](https://github.com/vercel-labs/portless)
- **Linter & Formatter**: [Biome](https://biomejs.dev/)
- **Test Runner**: [Vitest](https://vitest.dev/) & [Playwright](https://playwright.dev/)
- **Deployment**: [Cloudflare Workers](https://workers.cloudflare.com/)

## Getting Started

### Prerequisites

- [proto](https://moonrepo.dev/proto) (Toolchain manager)

To install proto:
```bash
curl -fsSL https://moonrepo.dev/install/proto.sh | bash
```

### Setup

```bash
# Initialize the toolchain (installs pinned bun, moon, and node)
proto use

# Install dependencies
bun install
```

### Development

This project uses **Portless** to provide stable, named `.localhost` URLs. When you run a `dev` task, the Portless proxy will start automatically in the background.

Apps are accessible via their project name on port 4665: `http://<project-name>.localhost:4665`

Run common tasks for all projects or affected ones:

```bash
bun build      # Build all affected projects
bun test       # Run tests for all affected projects
bun lint       # Lint and format all affected projects
bun typecheck  # Typecheck all affected projects
bun e2e        # Run E2E tests for all affected projects
```

To run a specific project task:

```bash
bun moon run <project>:<task>
# e.g., bun moon run auth-web:dev
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
