/**
 * Shared between the app and the server: this file is registered with both
 * `addImportsDir` and `addServerImportsDir` in `src/module.ts`, so consumers
 * get `formatGreeting` auto-imported on either side.
 *
 * Keeping the pure logic here (no Nuxt/H3 imports) as we are in neutral territory
 */

export interface GreetingOptions {
  /**
   * Word placed before the name.
   * @default 'Hello'
   */
  prefix: string
  /**
   * Name used when none is provided.
   * @default 'world'
   */
  fallback: string
}

export function formatGreeting(name: string | null | undefined, options: GreetingOptions): string {
  const trimmed = name?.trim()
  return `${options.prefix}, ${trimmed || options.fallback}!`
}
