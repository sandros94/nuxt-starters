import { describe, expect, it } from 'vitest'
import { createPage, setup } from '@nuxt/test-utils/e2e'

describe('e2e (createPage): home page greeting', async () => {
  await setup({ browser: true })

  it('renders the default greeting', async () => {
    const page = await createPage('/')

    expect(await page.getByTestId('greeting').textContent()).toBe('Hello, world!')
    await page.close()
  })
})
