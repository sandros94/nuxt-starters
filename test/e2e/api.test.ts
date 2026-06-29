/**
 * E2E — test/e2e/
 *
 * Builds the app and boots a real Nitro server (the `node-server`
 * preset from `$test` in `nuxt.config.ts`), then drives it over real
 * HTTP with `$fetch`. No mocking — this is the closest layer to
 * production. The build makes it the slowest, hence the long
 * `hookTimeout` on this project in `vite.config.ts`.
 */
import { describe, expect, it } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils/e2e'

describe('e2e: hello API + home page', async () => {
  await setup()

  it('GET /api/hello returns the default greeting', async () => {
    expect(await $fetch('/api/hello')).toEqual({ message: 'Hello, world!' })
  })

  it('GET /api/hello?name=Ada greets the name', async () => {
    const res = await $fetch('/api/hello', { query: { name: 'Ada' } })
    expect(res.message).toBe('Hello, Ada!')
  })

  it('GET / serves the rendered home page', async () => {
    const html = await $fetch('/')
    expect(html).toContain('Nuxt V5 Starter')
  })
})
