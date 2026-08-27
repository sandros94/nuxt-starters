// Explicit import: fixtures are prepared by `pnpm dev:prepare`, but keeping
// the import here means the file also type-checks on a cold checkout.
import { defineNuxtConfig } from 'nuxt/config'
import MyModule from '../../../src/module'

export default defineNuxtConfig({
  compatibilityDate: 'latest',

  // Registered from source rather than through the workspace link, so the
  // `nuxt` and `e2e` projects test the sources with no build in between.
  modules: [MyModule],

  // Overrides only `prefix` — `fallback` still comes from the module defaults,
  // which is what the tests assert about `defu` merging.
  myModule: {
    greeting: {
      prefix: 'Hey',
    },
  },
})
