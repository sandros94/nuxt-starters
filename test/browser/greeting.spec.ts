import { expect, test } from '@nuxt/test-utils/playwright'

/**
 * Drives the playground, which consumes the module through the workspace link
 * and leaves the options at their defaults.
 */
test.describe('playground', () => {
  test('renders the default greeting', async ({ page, goto }) => {
    await goto('/', { waitUntil: 'hydration' })
    await expect(page.getByTestId('greeting')).toHaveText('Hello, world!')
  })

  test('updates the greeting reactively as the user types', async ({ page, goto }) => {
    await goto('/', { waitUntil: 'hydration' })

    await page.getByPlaceholder('Your name').fill('Ada')
    await expect(page.getByTestId('greeting')).toHaveText('Hello, Ada!')
  })

  test('exposes the helper injected by the module plugin', async ({ page, goto }) => {
    await goto('/', { waitUntil: 'hydration' })
    await expect(page.getByTestId('plugin-greeting')).toHaveText('Hello, Nuxt!')
  })
})
