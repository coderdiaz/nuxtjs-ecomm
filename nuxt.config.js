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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700,900' },
      { rel: 'stylesheet', href: 'https://cdn.snipcart.com/themes/v3.0.11/default/snipcart.css' }
    ],
    script: [
      // jQuery. Only needed for snipcart
      {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"
      },
      // Snipcart js
      {
        src: "https://cdn.snipcart.com/themes/v3.0.11/default/snipcart.js",
        id: "snipcart",
        "data-autopop": "false",
        // Change me. Read more at http://snipcart.com
        "data-api-key":
          "ZGU1MWUxMjYtY2RmYi00MGUxLWE5NTQtMWM1NzFhODhhYzhhNjM3MzQxNzE1NzE3NTg5NDg4"
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
    '@/assets/css/resetr.css',
    '@/assets/css/common.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
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

  prismic: {
    endpoint: 'https://your-repo-name.cdn.prismic.io/api/v2',
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
