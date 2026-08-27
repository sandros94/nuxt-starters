import { expect, test } from '@nuxt/test-utils/playwright'

test.describe('home page', () => {
  test('has correct title', async ({ page, goto }) => {
    await goto('/', { waitUntil: 'hydration' })
    await expect(page).toHaveTitle('Nuxt UI Starter Template')
  })

  test('renders the default greeting', async ({ page, goto }) => {
    await goto('/', { waitUntil: 'hydration' })
    await expect(page.getByTestId('greeting')).toHaveText('Hello, world!')
  })

  test('updates the greeting reactively as the user types', async ({ page, goto }) => {
    await goto('/', { waitUntil: 'hydration' })
    await page.getByPlaceholder('Your name').fill('Ada')
    await expect(page.getByTestId('greeting')).toHaveText('Hello, Ada!')
  })
})
