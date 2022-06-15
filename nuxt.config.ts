import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
	buildModules: [
		'nuxt-windicss'
	],
	css: [
		'virtual:windi.css'
	]
})
