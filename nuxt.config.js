export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  env: {
    baseUrl: process.env.BASE_URL || process.env.URL || (process.env.NODE_ENV === 'production' ? 'https://popcorn.thombruce.com' : 'http://localhost:3000')
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Popcorn',
    titleTemplate: '%s | Popcorn',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Yet another culture blog.' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Popcorn' },
      { hid: 'og:title', property: 'og:title', content: 'Popcorn' },
      { hid: 'og:description', property: 'og:description', content: 'Yet another culture blog.' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://popcorn.thombruce.com/' },
      { hid: 'og:image', property: 'og:image', content: 'https://popcorn.thombruce.com/popcorn.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      process.env.NODE_ENV === 'production' ? { src: 'https://analytics.thombruce.com/umami.js', 'data-website-id': '3ef9958b-b845-4154-84ff-e9049c41f1ff', async: true, defer: true } : {}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@thombruce/tnt',
    '@thombruce/vue-timepiece/nuxt',
    '@thombruce/vue-fountain/nuxt'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
