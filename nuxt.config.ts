export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  app: {
    head: {
      title: 'Next',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      bodyAttrs: { class: 'bg-white dark:bg-gray-900' }
    }
  },
  modules: ['@nuxtjs/i18n', '@nuxt/ui'],
  ui: { global: true },
  colorMode: {
    preference: 'dark',
    classSuffix: ''
  }
})
