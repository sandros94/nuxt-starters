import { defineEventHandler, getQuery } from 'nitro/h3'
import { formatGreeting } from '#shared/utils/greeting'

export default defineEventHandler((event) => {
  const { name } = getQuery(event)

  return {
    message: formatGreeting(typeof name === 'string' ? name : undefined),
  }
})
