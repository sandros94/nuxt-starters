import { formatGreeting } from '#shared/utils/greeting'

/**
 * Tiny demo composable wiring the shared `formatGreeting` helper to
 * Nuxt state. `message` is derived locally (no round-trip), while
 * `refresh()` exercises the `/api/hello` server route — handy for
 * showing how to test both reactive state and server calls in the
 * `nuxt` environment (`mountSuspended`, `registerEndpoint`).
 */
export function useGreeting() {
  const name = useState<string>('greeting:name', () => '')
  const message = computed(() => formatGreeting(name.value))

  async function refresh() {
    const { message } = await $fetch<{ message: string }>('/api/hello', {
      query: name.value ? { name: name.value } : undefined,
    })
    return message
  }

  return { name, message, refresh }
}
