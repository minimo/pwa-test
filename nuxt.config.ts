// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: true
  },
  app: {
    head: {
      title: 'PWA-TEST',
      link: [
        { rel: 'manifest', href: '/manifest.webmanifest' }
      ]
    }
  },
})
