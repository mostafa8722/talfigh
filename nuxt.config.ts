import colors from 'vuetify/es5/util/colors'
import { NuxtConfig } from '@nuxt/types'
import fa from 'vuetify/src/locale/fa'

const config: NuxtConfig = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/4.4.95/css/materialdesignicons.min.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/styles.scss',
    '@fortawesome/fontawesome-free/css/all.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.ts',
    '~/plugins/repositories.ts',
    '~/plugins/errors.ts',
    '~/plugins/vue-smooth-dnd.js',
    "~/plugins/th-components.ts",
    {src: '~plugins/vuelayers.js', ssr: false},
     '~plugins/vuetify-draggable-treeview.js',
    { src: '~/plugins/TiptapVuetify', mode: 'client' }
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  router: {
    middleware: 'maintenance'
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://talfigh.ventosco.com/admin/api',
    credentials: true,
    headers: {
      common: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  },

  server: {
    port: 8000
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    rtl: true,
    lang: {
      locales: { fa },
      current: 'fa'
    },
    customVariables: ['~/assets/scss/_variables.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        light: {
          primary: "#2D9DCD",
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: '#F2994A',
          error: '#FF5C5C',
          success: colors.green.accent3
        }
      }
    },
        icons: {
          iconfont: 'fa', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
        },
  },

  styleResources: {
    scss: [
      '~/assets/scss/_variables.scss',
      '~/assets/scss/_colors.scss'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(_, { isClient, loaders: { vue } }) {
      if (isClient) {
        if (vue && vue.transformAssetUrls) {
          vue.transformAssetUrls.video = ['src', 'poster']
          vue.transformAssetUrls['v-img'] = ['src', 'blank-src']
        }
      }
    },
    transpile: ['vuetify/lib', "tiptap-vuetify"]
  }
}

export default config
