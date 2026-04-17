# Agents context

## Commands

- **Build**: `moon run :build --affected` (builds changed projects)
- **Test**: `moon run :test --affected` (runs vitest)
- **Lint**: `moon run :lint --affected` (uses Biome)
- **Typecheck**: `moon run :typecheck --affected` (uses tsc)
- **Sync**: `moon sync` (syncs project graph)
- **Deploy**: `moon run <project>:deploy` (wrangler deploy for apps)

## Tech Stack

- **Monorepo**: moonrepo + pnpm workspaces
- **Frontend**: Solid.js (web apps/clients)
- **Backend**: Hono (Cloudflare Workers via Wrangler)
- **Tooling**: Biome (lint/format), Vite (build), Vitest (test)
- **Naming**: Scoped packages `@ley-labs/*`

## Project Structure

- `apps/`: Deployable applications (Cloudflare Workers/Web)
- `packages/`: Shared libraries and clients
- `.moon/tasks/`: Global task definitions (inherited by project config files)
- `.moon/templates/`: Scaffolding templates for `api`, `web`, and `lib`

## Conventions

- **Task inheritance**: Projects inherit tasks based on presence of trigger files:
  - `wrangler.json` -> `deploy`
  - `tsconfig.json` -> `typecheck`
  - `vitest.config.ts` -> `test`
  - `biome.json` -> `lint`
  - `vite.config.ts` -> `build`
- **Imports**: Use workspace aliases `@ley-labs/auth-shared`, etc.
- **Scaffolding**: Use `moon init --template <type>` to create new projects.

## Gotchas

- **Biome**: Does both linting and formatting. Run `pnpm format` for auto-fixes.
- **Moon affected**: Local development often uses `--affected` to save time. For single project: `moon run <project>:<task>`.
- **Cloudflare**: API apps are Hono-based Workers. Web apps are static/Solid.js also deployed via Wrangler.
