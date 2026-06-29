/**
 * Pure greeting helper shared across the app, server and tests.
 *
 * Lives in `shared/` so it can be imported from both the Vue side
 * (`#shared/utils/greeting`) and Nitro server routes without pulling
 * in any runtime-specific context — which makes it the ideal target
 * for plain `unit` tests.
 */
export function formatGreeting(name?: string | null): string {
  const trimmed = name?.trim()
  return trimmed ? `Hello, ${trimmed}!` : 'Hello, world!'
}
