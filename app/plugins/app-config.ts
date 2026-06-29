export default defineNuxtPlugin({
  parallel: true,
  enforce: 'pre',
  name: 'app:config',
  setup() {
    // The Nuxt v5 nightly currently chokes on `app.config.ts`, so the
    // theme-level overrides land here. `updateAppConfig`'s public type
    // only narrows to `{ colors, icons, tv }`, but the Nuxt UI v4
    // tailwind-variants pipeline still picks up `ui.modal.slots` /
    // `ui.slideover.slots` at runtime — hence the cast.
    updateAppConfig({
      ui: {
        colors: {
          primary: 'orange',
          neutral: 'neutral',
          info: 'sky',
        },
      } as Record<string, unknown>,
    })
  },
})
