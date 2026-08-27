import type { GreetingOptions } from './runtime/shared/greeting'

export type { GreetingOptions }

export interface ModuleOptions {
  greeting: GreetingOptions
}

/**
 * `@nuxt/module-builder` picks these up from the module's exports and emits the
 * matching `@nuxt/schema` augmentations into `dist/types.d.mts` — so consumers
 * get typed runtime config without the module hand-writing `declare module`.
 *
 * Siblings it understands: `ModuleRuntimeConfig`, `ModuleHooks`,
 * `ModuleRuntimeHooks`.
 */
export interface ModulePublicRuntimeConfig {
  myModule: ModuleOptions
}

/**
 * The same augmentation module-builder emits, declared here so the module's
 * *own* sources see it too — `dist/` types don't apply while type-checking
 * `src/`. Identical `extends` clauses merge, so nothing conflicts downstream.
 */
declare module '@nuxt/schema' {
  interface PublicRuntimeConfig extends ModulePublicRuntimeConfig {}
}
