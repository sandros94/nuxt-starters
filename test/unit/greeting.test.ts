import { describe, expect, it } from 'vitest'
import { formatGreeting } from '../../src/runtime/shared/greeting'

const options = { prefix: 'Hello', fallback: 'world' }

describe('formatGreeting', () => {
  it('greets a given name', () => {
    expect(formatGreeting('Ada', options)).toBe('Hello, Ada!')
  })

  it('falls back when no name is given', () => {
    expect(formatGreeting(undefined, options)).toBe('Hello, world!')
    expect(formatGreeting('', options)).toBe('Hello, world!')
    expect(formatGreeting(null, options)).toBe('Hello, world!')
  })

  it('trims surrounding whitespace', () => {
    expect(formatGreeting('  Grace  ', options)).toBe('Hello, Grace!')
  })

  it('treats a whitespace-only name as empty', () => {
    expect(formatGreeting('   ', options)).toBe('Hello, world!')
  })

  it('honours the configured prefix and fallback', () => {
    expect(formatGreeting(undefined, { prefix: 'Hey', fallback: 'stranger' })).toBe(
      'Hey, stranger!',
    )
  })
})
