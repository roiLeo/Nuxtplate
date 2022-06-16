import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  buildModules: ['nuxt-windicss', '@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '',
  },
  css: ['virtual:windi.css'],
})
