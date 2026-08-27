import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils/e2e'

/**
 * One `setup()` per file: each call builds and boots the fixture, so grouping
 * the assertions keeps the suite from paying that cost twice.
 */
describe('e2e: module against the basic fixture', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('../fixtures/basic', import.meta.url)),
  })

  it('server-renders the component registered by the module', async () => {
    const html = await $fetch<string>('/')
    expect(html).toContain('Hey, world!')
  })

  it('GET /api/hello returns the configured greeting', async () => {
    expect(await $fetch('/api/hello')).toEqual({ message: 'Hey, world!' })
  })

  it('GET /api/hello?name=Ada greets the name', async () => {
    const res = await $fetch<{ message: string }>('/api/hello', { query: { name: 'Ada' } })
    expect(res.message).toBe('Hey, Ada!')
  })
})
