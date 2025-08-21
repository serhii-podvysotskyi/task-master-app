import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils',
    '@nuxt/test-utils/module',
    'nuxt-auth-sanctum',
    '@pinia/nuxt',
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
  pinia: {
    storesDirs: ['./stores/**'],
  },
  sanctum: {
    endpoints: {
      csrf: '/sanctum/csrf-cookie',
      login: '/auth/login',
      logout: '/auth/logout',
      user: '/auth/user',
    },
    redirect: {
      onLogin: '/dashboard',
      onLogout: '/',
      onAuthOnly: '/login',
      onGuestOnly: '/dashboard',
    },
  },
})
