// h3 utils are no longer auto-imported by nitro v3 — import them from `h3`.
import { defineHandler, getQuery } from 'h3'

export default defineHandler((event) => {
  const { name } = getQuery(event)

  return {
    message: formatGreeting(typeof name === 'string' ? name : undefined),
  }
})
