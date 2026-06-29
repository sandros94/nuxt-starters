export default defineNuxtConfig({
  compatibilityDate: 'latest',
  devtools: { enabled: false },

  modules: ['@nuxt/ui'],

  css: ['~/assets/css/main.css'],

  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules/vue/dist/vue.runtime')) return 'vue-runtime'
          },
        },
      },
    },
  },

  nitro: {
    serverDir: './server',
    imports: {},

    replace: {
      'from "consola"': 'from "consola/browser"',
      'secure: !import.meta.dev': 'secure: true',
    },
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        allowImportingTsExtensions: true,
      },
    },
    sharedTsConfig: {
      compilerOptions: {
        allowImportingTsExtensions: true,
      },
    },
  },

  $test: {
    nitro: {
      preset: 'node-server',
    },
  },
})
