export const state = () => ({})

export const mutations = {}

export const actions = {
	async nuxtServerInit({ state, dispatch, commit }, { req, res, app, route }) {
		const paymentRequestData = {
			amount: 5000,
			term: 5,
			promoCode: null,
			group: 'BASIC',
		}

		const queue = [
			dispatch('lang/fetchLangs'),
			dispatch('calculator/fetchPaymentShedule', paymentRequestData),
			dispatch('menu/fetchMenu'),
			dispatch('settings/fetchSettings'),
			dispatch('banners/fetchBanners'),
		]

		await Promise.all(queue)
	}
}

export const getters = {}
