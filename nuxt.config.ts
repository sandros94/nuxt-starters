// https://nuxt.com/docs/guide/directory-structure/nuxt.config#nuxt-config-file
export default defineNuxtConfig({

  extends: ['gh:sandros94/ui/main-v3#5a4c08cbd8c1459a5356a30c763b835ec4833b44'],

  modules: [
    '@nuxt/eslint',
  ],

  eslint: {
    config: {
      stylistic: true,
    },
  },

  devtools: { enabled: true },
})
