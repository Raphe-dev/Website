import en from './i18n/en'
import fr from './i18n/fr'


export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Raphe.dev',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'url', content: `${process.env.BASE_URL}` },
      { name: 'description', content: 'Web development services' },
      { name: 'og:title', content: 'Raphe.dev' },
      { name: 'og:url', content: '' },
      { name: 'og:type', content: 'website' },
      { name: 'og:description', content: 'Web development services' },
      { name: 'og:image', content: `${process.env.BASE_URL}/images/image.png` },
      { name: 'og:image:alt', content: 'image alt'},
      { name: 'og:image:type', content: 'image/png'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/index.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
      '@/plugins/bootstrap.js'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'nuxt-i18n',
      {
        strategy: 'prefix_except_default',
        locales: ['en', 'fr'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'fr',
          messages: {
            en: en,
            fr: fr
          }
        }
      },
      'nuxt-mq',
      {
        defaultBreakpoint: 'default',
        breakpoints: {
          sm: 768,
          md: 1024,
          lg: Infinity
        }
      }
    ]
  ],
  render: {
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      setHeaders(res) {
        res.setHeader('Cache-Control', 'public, max-age=86400000, s-maxage=604800000')
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
