const API_URL = `${process.env.API_URL}`
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'EXAMPLE NUXT',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style/main.css',
    '@/assets/style/tailwind.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios.js',
    {src: '~/plugins/vuex-persistedstate.js', ssr: false},
    {src: '~/plugins/vue-persian-datetime-picker.js', ssr: false},
    {src: '~/plugins/vue-sweetalert2.js', ssr: false},
    {src: '~/plugins/vuejs-paginate.js', ssr: false},
    {src: '~/plugins/vue-owl-carousel.js', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/svg-sprite',
    '@nuxtjs/auth-next',
    'vue-sweetalert2/nuxt'
  ],

  sweetalert: {
    confirmButtonText: 'YES,DELETE IT',
    cancelButtonText: 'NO, KEEP IT',
    confirmButtonColor: '#30C97F',
    cancelButtonColor: '#fff'
  },

  svgSprite: {
    // manipulate module options
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: API_URL
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          maxAge: 60 * 60 * 24 * 30,
          global: true
        },
        user: {
          property: 'user'
          // autoFetch: true
        },
        scheme: 'local',
        endpoints: {
          login: { url:  `${API_URL}/login`, method: 'post'},
          user: false,
          logout: false
        },
      }
      // plugins: ['~/plugins/auth.js']
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  env: {
    apiUrl: API_URL || 'http://10.0.0.68:3333'
  }
}
