import { beforeEach, describe, expect, it } from 'vitest'
import { useState } from '#imports'
import { useGreeting } from '../../src/runtime/app/composables/useGreeting'

/**
 * Runs inside the fixture's Nuxt environment, so the composable reads the
 * fixture's runtime config: `prefix: 'Hey'` with the module's default fallback.
 */
describe('useGreeting', () => {
  beforeEach(() => {
    useState('my-module:name').value = ''
  })

  it('reads the merged module options from the runtime config', () => {
    const { message } = useGreeting()
    expect(message.value).toBe('Hey, world!')
  })

  it('derives the message from the shared state', () => {
    const { name, message } = useGreeting()

    name.value = 'Ada'
    expect(message.value).toBe('Hey, Ada!')
  })

  it('shares state between callers', () => {
    const first = useGreeting()
    const second = useGreeting()

    first.name.value = 'Grace'
    expect(second.message.value).toBe('Hey, Grace!')
  })
})
