export function formatGreeting(name?: string | null): string {
  const trimmed = name?.trim()
  return trimmed ? `Hello, ${trimmed}!` : 'Hello, world!'
}
