export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/ui',
    'nuxt-api-party',
  ],

  devtools: {
    enabled: true,
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
    },
  },

  eslint: {
    config: {
      standalone: false,
      autoInit: false,
    },
  },

  apiParty: {
    endpoints: {
      rebo: {
        url: 'https://rebogroep.recruitee.com/api/',
      },
    },
  },

  

  compatibilityDate: '2024-10-14',
})
