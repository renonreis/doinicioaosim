export default {
  mode: 'universal',
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Curso de noivos online Do Início ao Sim',
    htmlAttrs: {
      lang: 'pt_BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Faça o Curso de Noivos Online e tenha um tempo de preparação que marcará para sempre a vida de vocês e desfrute de um casamento cheio de paz, amor e alegria.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/doinicioaosim/favicon.png' },
      { rel: 'apple-touch-icon', href: '/doinicioaosim/icon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file in the project
    '~/assets/css/main.css',
    // SCSS file in the project
    '~/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://google-fonts.nuxtjs.org/
    '@nuxtjs/google-fonts',
    // https://pwa.nuxtjs.org/
    '@nuxtjs/pwa',
    // https://image.nuxtjs.org/
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxtjs/style-resources',
    // https://www.npmjs.com/package/nuxt-compress
    'nuxt-compress',
    // https://www.npmjs.com/package/nuxt-ssr-cache
    'nuxt-ssr-cache'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },

  router: {
    linkActiveClass: 'active-link',
    target: 'static',
    base: '/doinicioaosim/',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404')
      })
    }
  },

  googleFonts: {
    display: 'swap',
    families: {
      Montserrat: [300, 400, 500]
    }
  },

  optimizedImages: {
    inlineImageLimit: -1,
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 85
    },
    optipng: false,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8]
    },
    webp: {
      quality: 85
    }
  },

  styleResources: {
    scss: ['./assets/css/global/*.scss']
  },

  pwa: {
    icon: false, // disables the icon module
    manifest: {
      name: 'Do Início ao Sim',
      lang: 'pt_BR',
      useWebmanifestExtension: false,
      theme_color: "#f79301",
      icon: {
        purpose: 'maskable'
      }
    },
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'dev/sw.js',
    }
  },

  image: {
    dir: 'static/images',
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 2560,
      '2xl': 1536
    },
    staticFilename: '[publicPath]/images/[name][ext]'
  }
}
