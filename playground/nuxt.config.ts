export default defineNuxtConfig({
  compatibilityDate: 'latest',
  devtools: { enabled: true },

  modules: ['my-module'],

  myModule: {},

  $test: {
    nitro: {
      preset: 'node-server',
    },
  },
})
