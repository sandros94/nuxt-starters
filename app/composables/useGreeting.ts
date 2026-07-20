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
