// https://nuxt.com/docs/guide/directory-structure/nuxt.config#nuxt-config-file
export default defineNuxtConfig({

  extends: ['gh:sandros94/ui/main#da784869b2c65ae87b60cf720a9c34251383818f'],

  modules: [
    '@nuxt/eslint',
  ],

  eslint: {
    config: {
      stylistic: true,
    },
  },

  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },
})
