export default defineEventHandler((event) => {
  const { name } = getQuery(event)

  return {
    message: formatGreeting(typeof name === 'string' ? name : undefined),
  }
})
