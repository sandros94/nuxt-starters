import { beforeEach, describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'

// @ts-ignore -- .vue SFC types aren't resolvable by tsgolint (vp check); vue-tsc handles it in `pnpm typecheck`
import AppGreeting from '~/components/AppGreeting.vue'

describe('AppGreeting', () => {
  beforeEach(() => {
    useState('greeting:name').value = ''
  })

  it('renders the default greeting', async () => {
    const wrapper = await mountSuspended(AppGreeting)
    expect(wrapper.get('[data-testid="greeting"]').text()).toBe('Hello, world!')
  })

  it('updates the greeting as the user types', async () => {
    const wrapper = await mountSuspended(AppGreeting)

    await wrapper.get('input').setValue('Ada')
    await nextTick()

    expect(wrapper.get('[data-testid="greeting"]').text()).toBe('Hello, Ada!')
  })
})
