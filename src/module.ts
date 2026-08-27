import {
  addComponent,
  addImportsDir,
  addPlugin,
  addServerHandler,
  addServerImportsDir,
  addTemplate,
  addTypeTemplate,
  createResolver,
  defineNuxtModule,
  useLogger,
} from '@nuxt/kit'
import defu from 'defu'
import { version } from '../package.json'
import type { ModuleOptions } from './types'

export type { GreetingOptions, ModuleOptions, ModulePublicRuntimeConfig } from './types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
    compatibility: {
      nuxt: '>=4.0.0',
    },
  },
  defaults: {
    greeting: {
      prefix: 'Hello',
      fallback: 'world',
    },
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)
    const logger = useLogger('my-module')

    // 1. Runtime config — the runtime source of truth for the options.
    //    `defu` keeps whatever the user already set in `nuxt.config`.
    nuxt.options.runtimeConfig.public.myModule = defu(
      nuxt.options.runtimeConfig.public.myModule,
      options,
    )

    // 2. Auto-imports. The `shared` dir goes to both sides, `composables` is
    //    app-only and `server/utils` is server-only.
    addImportsDir(resolver.resolve('./runtime/shared'))
    addServerImportsDir(resolver.resolve('./runtime/shared'))
    addImportsDir(resolver.resolve('./runtime/app/composables'))
    addServerImportsDir(resolver.resolve('./runtime/server/utils'))

    // 3. A component, prefixed so it cannot collide with the user's own.
    addComponent({
      name: 'MyModuleGreeting',
      filePath: resolver.resolve('./runtime/app/components/Greeting.vue'),
    })

    // 4. A server route.
    addServerHandler({
      route: '/api/hello',
      method: 'get',
      handler: resolver.resolve('./runtime/server/api/hello.get'),
    })

    // 5. A virtual module (`#my-module/options`) holding build-time values,
    //    so runtime code can import constants without a runtime-config lookup.
    const optionsTemplate = addTemplate({
      filename: 'my-module/options.mjs',
      getContents: () =>
        [
          `export const greeting = ${JSON.stringify(options.greeting, null, 2)}`,
          `export const version = ${JSON.stringify(version)}`,
        ].join('\n'),
    })

    // 6. …and its types. `addTypeTemplate` registers the file in `.nuxt`, the
    //    alias makes the specifier resolvable by the bundler.
    addTypeTemplate({
      filename: 'my-module/options.d.ts',
      getContents: () =>
        [
          `declare module '#my-module/options' {`,
          `  import type { GreetingOptions } from '${resolver.resolve('./runtime/shared/greeting')}'`,
          `  export const greeting: GreetingOptions`,
          `  export const version: string`,
          `}`,
        ].join('\n'),
    })
    nuxt.options.alias['#my-module/options'] = optionsTemplate.dst

    // 7. A plugin, added last so it can rely on everything above.
    addPlugin(resolver.resolve('./runtime/app/plugins/greeting'))

    logger.debug(`greeting configured as "${options.greeting.prefix}, …"`)
  },
})
