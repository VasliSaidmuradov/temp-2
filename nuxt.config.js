
export default {
  mode: 'universal',
  server: {
    port: 3001, // default: 3000
    // host: '0.0.0.0', // default: localhost,
    timing: false
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'CashU',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      {
          hid: 'yandex-v',
          name: 'yandex-verification',
          content: '354130c52c40184b',
      },
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/gsap.min.js' },
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
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
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
