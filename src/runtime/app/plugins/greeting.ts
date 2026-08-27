import { defineNuxtPlugin } from '#app'
import { greeting, version } from '#my-module/options'
import { formatGreeting } from '../../shared/greeting'

export default defineNuxtPlugin({
  name: 'my-module:greeting',
  setup() {
    return {
      provide: {
        greeting: (name?: string) => formatGreeting(name, greeting),
        greetingVersion: version,
      },
    }
  },
})
