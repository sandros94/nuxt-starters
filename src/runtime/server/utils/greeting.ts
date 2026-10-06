import { useRuntimeConfig } from 'nuxt/server'

import type { GreetingOptions } from '../../shared/greeting'

export function useGreetingOptions(): GreetingOptions {
  return useRuntimeConfig().public.myModule.greeting
}
