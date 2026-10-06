import type { ModulePublicRuntimeConfig } from './types'

declare module 'nuxt/schema' {
  interface PublicRuntimeConfig {
    myModule: ModulePublicRuntimeConfig['myModule']
  }
}
