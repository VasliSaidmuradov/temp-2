
export default {
  mode: 'universal',
  server: {
    port: 3001, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'CashU',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      {
          hid: 'yandex-v',
          name: 'yandex-verification',
          content: '0a2739bfab55c1ec',
      },
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/gsap.min.js' },
      { src: '//web.webpushs.com/js/push/b6c91db106f83861eb35da8eca7c858c_1.js', charset: 'UTF-8', async: true }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
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
    '~/assets/styles/app.sass'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/api' },
    { src: '~/plugins/error' },
    { src: '~/plugins/helpers' },

    { src: '~/plugins/swiper.js', mode: 'client' },
    { src: '~/plugins/vue-the-mask.js', ssr: false },
    { src: '~/plugins/vue-star-component.js', ssr: false },
    { src: '~/plugins/vue-plyr.js', ssr: false },
    { src: '~/plugins/vue-round-slider.js', ssr: false },
    { src: '~/plugins/vue-slider-component.js', ssr: false },
    { src: '~/plugins/vue-scrollmagic.js', ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  router: {
    // middleware: ['stub'],
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['cookie-universal-nuxt', { alias: 'cookiz', parseJSON: true }],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['@nuxtjs/google-analytics', {
      id: 'UA-175172093-1'
    }],
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '66105637',
        webvisor: true,
        clickmap: true,
        // useCDN:false,
        trackLinks: true,
        accurateTrackBounce: true,
      }
    ],
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    analyze: false,
    extend(config, { ctx, isClient }) {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        use: ['babel-loader', 'vue-svg-loader'],
      });
      if (isClient) {
        config.devtool = process.env.NODE_ENV === 'development' ? '#source-map' : '';
      }
    }
  }
}
