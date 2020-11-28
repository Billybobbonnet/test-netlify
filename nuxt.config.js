import colors from 'vuetify/es5/util/colors'
import languages from './static/lang/languages'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - Yggdrasil',
    title: 'Yggdrasil',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  server: {
    port: 3000, // par défaut: 3000
    host: '0.0.0.0', // par défaut: localhost
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~plugins/i18n-config.js' }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://pwa.nuxtjs.org/setup
    '@nuxtjs/pwa',
    // https://github.com/robcresswell/nuxt-compress
    [
      'nuxt-compress',
      {
        gzip: {
          cache: true,
        },
        brotli: {
          threshold: 10240,
        },
      },
    ],
  ],
  /*
   ** PWA module configuration
   ** https://pwa.nuxtjs.org/setup#configuration
   */
  pwa: {
    icon: {
      source: 'static/icon.png',
      filename: 'icon.png',
    },
    manifest: {
      name: process.env.npm_package_name || '',
      lang: process.env.lang,
    },
    meta: {
      name: process.env.npm_package_name || '',
      lang: process.env.lang,
      ogHost: process.env.URL,
      ogImage: '/ogp.jpg',
    },
  },
  /*
   ** loading feature configuration
   ** https://nuxtjs.org/guides/features/loading
   */
  loading: {
    color: '#00c2cb',
    height: '5px',
  },
  /*
   ** Sitemap module configuration
   ** https://github.com/nuxt-community/sitemap-module#setup-a-sitemap
   */
  sitemap: {
    hostname: 'https://positive-future.org',
    gzip: true,
    /* TODO : add hooks to include featured projects
     ** into the sitemap (dynamic routes).
     ** See https://github.com/nuxt-community/sitemap-module#hooks
     */
    exclude: [],
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://github.com/Developmint/nuxt-webfontloader
    'nuxt-webfontloader',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    [
      'nuxt-i18n',
      {
        // Options
        // to make it seo friendly remove below line and add baseUrl option to production domain
        seo: false,
        // baseUrl: 'https://my-nuxt-app.com',
        lazy: true,
        locales: languages,
        defaultLocale: 'en',
        strategy: 'no_prefix',
        vueI18n: {
          fallbackLocale: 'en',
        },
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          alwaysRedirect: true,
        },
        langDir: 'static/lang/',
      },
    ],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    // https://content.nuxtjs.org/fr/configuration#fulltextsearchfields
    fullTextSearchFields: ['title', 'description'],
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        light: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        },
        dark: {
          primary: colors.blue,
          accent: colors.grey.darken3,
          secondary: colors.grey.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.darken3,
          error: colors.deepOrange.darken3,
          success: colors.green.accent3,
        },
      },
    },
  },
  /*
   ** Web font loader module configuration
   ** https://github.com/Developmint/nuxt-webfontloader#readme
   */
  webfontloader: {
    google: {
      families: ['Poiret One:800'],
    },
  },
  /*
   ** robots module configuration
   ** https://github.com/nuxt-community/robots-module#options
   */
  robots: {
    UserAgent: '*',
    Disallow: '/',
  },
  /*
   ** Page Layout transition
   ** https://nuxtjs.org/guides/features/transitions#the-layouttransition-property
   */
  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
    beforeEnter(el) {
      console.log('TRANSITION : Before enter...')
    },
    afterLeave(el) {
      console.log('TRANSITION : afterLeave', el)
    },
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
