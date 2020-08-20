const cookieParser = require('cookie-parser');

export const state = () => ({})

export const mutations = {}

export const actions = {
	async nuxtServerInit({ state, store, dispatch, commit }, { req, res, app, route }) {
		const paymentRequestData = {
			amount: 5000,
			term: 5,
			promoCode: null,
			group: 'BASIC',
		}

		// console.log('cookiz: ', )
		// this.$cookiz.set('test', 'test')
		// this.$cookiz.remove('test')

		// console.log('cookiee: ', req.headers.cookie);
		// console.log('cookiz 1: ', this.$cookiz.get('lang'));
		if (
      route.query &&
      route.query.lang &&
      (route.query.lang === "ru" || route.query.lang === "kk")
    ) {
			// console.log('route >>.', route)
			this.$cookiz.set('lang', route.query.lang);
      // this.$store.commit("lang/SET_CURRENT_LANG", this.$route.query.lang);
    }
		// console.log('cookiz 2: ', this.$cookiz.get('lang'));

		const queue = [
			dispatch('lang/fetchLangs'),

      dispatch('calculator/fetchPaymentShedule', paymentRequestData),
      dispatch('calculator/fetchMinMax'),

			dispatch('menu/fetchMenu'),
			dispatch('settings/fetchSettings'),
			dispatch('banners/fetchBanners'),
		]
		if (this.$cookiz.get('lang') == 'ru' || this.$cookiz.get('lang') == 'kk') {
			queue.push(dispatch('lang/fetchCurrentLang', this.$cookiz.get('lang')))
		}
		try {
			await Promise.all(queue);
		} catch (e) {
			console.log(e);
		}
		try {
			await dispatch('calculator/fetchPaymentShedule', paymentRequestData)
			await dispatch('calculator/fetchMinMax')
		} catch (e) {
			console.log('ERROR: ', e)
			commit('calculator/SET_LOADING', true);
		}
	}
}

export const getters = {}
