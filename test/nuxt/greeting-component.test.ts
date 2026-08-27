import { beforeEach, describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import { useState } from '#imports'
import { mountSuspended } from '@nuxt/test-utils/runtime'

// @ts-ignore -- .vue SFC types aren't resolvable by tsgolint (`pnpm lint`); the
// playground typecheck (golar) is what covers this component.
import Greeting from '../../src/runtime/app/components/Greeting.vue'

describe('MyModuleGreeting', () => {
  beforeEach(() => {
    useState('my-module:name').value = ''
  })

  it('renders the greeting built from the module options', async () => {
    const wrapper = await mountSuspended(Greeting)
    expect(wrapper.get('[data-testid="greeting"]').text()).toBe('Hey, world!')
  })

  it('updates the greeting as the user types', async () => {
    const wrapper = await mountSuspended(Greeting)

    await wrapper.get('input').setValue('Ada')
    await nextTick()

    expect(wrapper.get('[data-testid="greeting"]').text()).toBe('Hey, Ada!')
  })
})
