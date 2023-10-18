// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/styles/main.scss'],
  runtimeConfig: {
    public: {
      server: 'http://localhost:4000',
    },
  },

  modules: [
    ['nuxt-purgecss', { enabled: true }],
    ['@nuxtjs/robots', { UserAgent: '*' }],
    '@nuxtjs/device',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_vars.scss" as *;',
        },
      },
    },
  },
})
