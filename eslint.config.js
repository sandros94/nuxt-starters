import { nuxt, stefanobartoletti, tailwind } from '@stefanobartoletti/eslint-config'

export default stefanobartoletti(
  {
    ignores: [
      // Project Specific
    ],
  },
  nuxt,
  tailwind,
  {
    // ESlint Flat config rule object
    rules: {
      'vue/html-self-closing': 'off',
      'vue/no-multiple-template-root': 'off',
      'unused-imports/no-unused-vars': 'warn',
      'no-console': 'warn',
      'tailwindcss/no-custom-classname': 'off',
      'vue/multi-word-component-names': 'off',

      // Project Specific
    },
  },
)
