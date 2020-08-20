export const state = () => ({
	banners: null,
})

export const mutations = {
	SET_BANNERS: (state, payload) => state.banners = payload,
}

export const actions = {
	async fetchBanners(store) {
		const resp = await this.$api.get('/banners')
		// console.log('banners: ', resp)
		store.commit('SET_BANNERS', resp)
	},
}

export const getters = {
	GET_BANNERS: state => state.banners,
}
