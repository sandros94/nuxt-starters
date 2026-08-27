import { describe, expect, it } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils/e2e'

describe('e2e: hello API + home page', async () => {
  await setup()

  it('GET /api/hello returns the default greeting', async () => {
    expect(await $fetch('/api/hello')).toEqual({ message: 'Hello, world!' })
  })

  it('GET /api/hello?name=Ada greets the name', async () => {
    expect(await $fetch('/api/hello', { query: { name: 'Ada' } })).toEqual({
      message: 'Hello, Ada!',
    })
  })
})
