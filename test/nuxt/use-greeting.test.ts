/**
 * NUXT — test/nuxt/
 *
 * Runs in the `nuxt` environment, so auto-imports (`useState`,
 * `computed`, `$fetch`…) and the Nuxt runtime are available. Use it
 * for composables/components that need Nuxt context. Server calls are
 * stubbed with `registerEndpoint` instead of hitting a real server.
 */
import { beforeAll, beforeEach, describe, expect, it } from 'vitest'
import { registerEndpoint } from '@nuxt/test-utils/runtime'

describe('useGreeting', () => {
  beforeAll(() => {
    // Stub the server route the composable's `refresh()` talks to.
    registerEndpoint('/api/hello', () => ({ message: 'Hello from the mock!' }))
  })

  beforeEach(() => {
    useState('greeting:name').value = ''
  })

  it('derives the message from the shared helper', () => {
    const { name, message } = useGreeting()
    expect(message.value).toBe('Hello, world!')

    name.value = 'Ada'
    expect(message.value).toBe('Hello, Ada!')
  })

  it('refresh() resolves the message from /api/hello', async () => {
    const { refresh } = useGreeting()
    expect(await refresh()).toBe('Hello from the mock!')
  })
})
