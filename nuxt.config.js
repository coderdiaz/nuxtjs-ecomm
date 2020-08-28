export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Prismic + Nuxt + Snipcart eComm example',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Prismic + Nuxt + Snipcart eComm example' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: "https://app.snipcart.com" },
      { rel: 'preconnect', href: "https://cdn.snipcart.com" },
      { rel: 'stylesheet', href: 'https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.css' }
    ],
    script: [
      // Snipcart js
      {
        src: "https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.js"
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Load imgix vue plugin
  */
  plugins: ['~/plugins/vue-imgix.js'],
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // modules for full static before `nuxt export` (coming in v2.12)
    '@/modules/static',
    '@/modules/crawler',
    // https://prismic-nuxt.js.org/
    '@nuxtjs/prismic'
  ],
  env: {
    storeUrl: process.env.STORE_URL ||"http://localhost:3000"
  },

  prismic: {
    endpoint: 'https://tdecomm1.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
    }
  },

  generate: {
    fallback: '404.html' // Netlify reads a 404.html, Nuxt will load as an SPA
  }
}
