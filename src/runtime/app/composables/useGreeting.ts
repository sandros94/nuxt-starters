import { computed } from 'vue'
import { useRuntimeConfig, useState } from '#imports'
import { formatGreeting } from '../../shared/greeting'

export function useGreeting() {
  const { greeting } = useRuntimeConfig().public.myModule

  const name = useState<string>('my-module:name', () => '')
  const message = computed(() => formatGreeting(name.value, greeting))

  return { name, message }
}
