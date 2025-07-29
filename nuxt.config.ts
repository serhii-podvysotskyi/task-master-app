import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils',
    '@nuxt/test-utils/module',
  ],
  devtools: {
    enabled: true,
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
    },
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  nitro: {
    experimental: {
      openAPI: true,
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  eslint: {
    checker: true,
    config: {
      stylistic: true,
    },
  },
})
