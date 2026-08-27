import { describe, expect, it } from 'vitest'
import { formatGreeting } from '#shared/utils/greeting'

describe('formatGreeting', () => {
  it('greets a given name', () => {
    expect(formatGreeting('Ada')).toBe('Hello, Ada!')
  })

  it('falls back to "world" when no name is given', () => {
    expect(formatGreeting()).toBe('Hello, world!')
    expect(formatGreeting('')).toBe('Hello, world!')
    expect(formatGreeting(null)).toBe('Hello, world!')
  })

  it('trims surrounding whitespace', () => {
    expect(formatGreeting('  Grace  ')).toBe('Hello, Grace!')
  })

  it('treats a whitespace-only name as empty', () => {
    expect(formatGreeting('   ')).toBe('Hello, world!')
  })
})
