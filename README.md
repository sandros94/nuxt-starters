<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: my-module
- Config key: myModule
- Component prefix: MyModule
- Description: My new Nuxt module
- Repository: your-org/my-module
-->

# My Module

[![npm version][npm-version-src]][npm-version-href] [![npm downloads][npm-downloads-src]][npm-downloads-href] [![License][license-src]][license-href] [![Nuxt][nuxt-src]][nuxt-href]

My new Nuxt module for doing amazing things.

Look at my [starters repo](https://github.com/sandros94/nuxt-starters) for more templates.

## Quick Start

```bash [Terminal]
npm create nuxt@latest my-module -- --packageManager pnpm -t gh:sandros94/nuxt-starters#module --gitInit --no-modules
```

## What's in the box

The module ships a small greeting feature whose only job is to exercise every authoring primitive you are likely to need, each one paired with a test:

| `src/module.ts` uses | ships | covered by |
| --- | --- | --- |
| `runtimeConfig` + `defu` | merged `myModule` options | `nuxt`, `e2e` |
| `addImportsDir` / `addServerImportsDir` | `formatGreeting`, `useGreeting`, `useGreetingOptions` | `unit`, `nuxt` |
| `addComponent` | `<MyModuleGreeting>` | `nuxt`, `browser` |
| `addServerHandler` | `GET /api/hello` | `e2e` |
| `addTemplate` + `addTypeTemplate` | `#my-module/options` virtual module | `browser` |
| `addPlugin` | `$greeting`, `$greetingVersion` | `browser` |

Runtime code lives under `src/runtime`, split the way Nuxt splits an app: `app/` (client + SSR), `server/` (nitro) and `shared/` (both — which is why the pure helper there is unit-testable without Nuxt).

## Testing

Four projects, each with a different blast radius. `pnpm test` runs the first three; `pnpm test:browser` is separate because it needs a browser binary.

- `test/unit` — plain Vitest, imports `src/runtime/shared` directly. No Nuxt.
- `test/nuxt` — `environment: 'nuxt'` against `test/fixtures/basic`, which registers the module **from source** and overrides `greeting.prefix`.
- `test/e2e` — boots that same fixture and hits SSR + the server route.
- `test/browser` — Playwright against `playground/`, which installs the module as a **workspace dependency**, i.e. the way a consumer gets it.

Fixture and playground disagree on purpose: the fixture proves options merge (`Hey, world!`), the playground proves the defaults ship (`Hello, world!`).

## Contribution

<details>
  <summary>Local development</summary>

```bash
# Install dependencies (also stubs dist/ and prepares the playground)
pnpm install

# Develop with the playground
pnpm dev

# Lint and format
pnpm lint
pnpm fmt

# Typecheck (module sources with tsc, playground with golar)
pnpm typecheck

# Test
pnpm test
pnpm test:unit
pnpm test:nuxt
pnpm test:e2e
pnpm test:browser

# Build the module
pnpm build
```

</details>

<details>
  <summary>Releasing</summary>

Releases are automated by [uppt](https://github.com/danielroe/uppt): pushing to `main` opens a draft `release/vX.Y.Z` PR built from the conventional commits since the last tag. Merging it tags the commit, publishes the GitHub Release, then packs and stages the tarball to npm through OIDC trusted publishing — which waits for your 2FA approval in the `npm` environment.

Nothing to run locally; just write conventional commits.

</details>

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/my-module/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/my-module
[npm-downloads-src]: https://img.shields.io/npm/dm/my-module.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/my-module
[license-src]: https://img.shields.io/npm/l/my-module.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/my-module
[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
