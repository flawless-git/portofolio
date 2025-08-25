// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "dark",
  },
    devServer: {
    host: "localhost",
    port: 3000,
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/test-utils',
    '@nuxtjs/color-mode'
  ],
  css: ['~/assets/css/main.css'],
   ui: {
    colorMode: false
  }
})