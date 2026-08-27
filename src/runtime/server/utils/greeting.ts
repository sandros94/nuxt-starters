import { useRuntimeConfig } from '#imports'
import type { GreetingOptions } from '../../shared/greeting'

export function useGreetingOptions(): GreetingOptions {
  return useRuntimeConfig().public.myModule.greeting
}
