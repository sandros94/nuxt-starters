// h3 utils are no longer auto-imported by nitro v3 — import them via `nitro/h3`.
import { defineHandler, getQuery } from 'nitro/h3'

export default defineHandler((event) => {
  const { name } = getQuery(event)

  return {
    message: formatGreeting(typeof name === 'string' ? name : undefined),
  }
})
