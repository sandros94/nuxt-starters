import { defineEventHandler, getQuery } from 'h3'
import { formatGreeting } from '../../shared/greeting'
import { useGreetingOptions } from '../utils/greeting'

export default defineEventHandler((event) => {
  const { name } = getQuery(event)

  return {
    message: formatGreeting(typeof name === 'string' ? name : undefined, useGreetingOptions()),
  }
})
