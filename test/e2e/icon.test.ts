import { describe, expect, it } from 'vitest'
import { $fetch, setup } from '@nuxt/test-utils/e2e'

// Regression guard for @nuxt/icon on nitro v3: its server endpoint is wired
// through `defineCachedHandler` from `nitro/cache`, which has already broken
// once on unattended dependency bumps. Exercising the endpoint end-to-end
// catches both the build-time virtual-module resolution and the runtime
// cached-handler path.
describe('e2e: @nuxt/icon server endpoint', async () => {
  await setup()

  it('serves the local lucide collection through the cached handler', async () => {
    const data = await $fetch('/api/_nuxt_icon/lucide.json', {
      query: { icons: 'check' },
    })

    expect(data).toMatchObject({ prefix: 'lucide' })
    const { icons } = data as { icons: Record<string, { body: string }> }
    expect(icons.check?.body).toContain('<path')
  })
})
