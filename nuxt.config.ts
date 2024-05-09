// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@nuxt/ui',
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  ui: {
    icons: {},
  },
})
