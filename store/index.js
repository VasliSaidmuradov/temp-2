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

		const queue = [
			dispatch('lang/fetchLangs'),

      // dispatch('calculator/fetchPaymentShedule', paymentRequestData),
      // dispatch('calculator/fetchMinMax'),

			dispatch('menu/fetchMenu'),
			dispatch('settings/fetchSettings'),
			dispatch('banners/fetchBanners'),
		]
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
