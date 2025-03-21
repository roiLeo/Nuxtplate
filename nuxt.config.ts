export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },

  app: {
    head: {
      title: 'Next',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  modules: ['@nuxtjs/i18n', '@nuxt/ui'],

  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'dark',
    classSuffix: ''
  },

  compatibilityDate: '2025-03-21'
})
