export const state = () => ({
	page: null,
})

export const mutations = {
	SET_PAGE: (state, payload) => state.page = payload,
}

export const actions = {
	async fetchPage(store, payload) {
		const resp = await this.$api.get(`/pages${payload}`);
		store.commit('SET_PAGE', resp);
	},
}

export const getters = {
	GET_PAGE: state => state.page,
	GET_EXTRAS: (state, getters, store) => {
		if (!state.page.extras[store.lang.currentLang].blocks) {
			return {}
		}
		let data = JSON.parse(
			state.page.extras[store.lang.currentLang].blocks
				? state.page.extras[store.lang.currentLang].blocks
				: (state.page.extras[Object.keys(state.page.extras)[0]])
		);
		return data
	},
	GET_SLIDES: (state, getters, store) => {
		if (!state.page.extras[store.lang.currentLang].slides) {
			return {}
		}
		let data = JSON.parse(
			state.page.extras[store.lang.currentLang].slides
				? state.page.extras[store.lang.currentLang].slides
				: (state.page.extras[Object.keys(state.page.extras)[0]])
		);

		data.forEach(el => {
			if (el.options) {
				el.options = JSON.parse(el.options);
			}
		})
		return data
	},
	GET_DOCS: (state, getters, store) => {
		if (!state.page.extras[store.lang.currentLang].documents_block) {
			return {}
		}
		let data = JSON.parse(
			state.page.extras[store.lang.currentLang].documents_block
				? state.page.extras[store.lang.currentLang].documents_block
				: (state.page.extras[Object.keys(state.page.extras)[0]])
		);
		return data
	}
}
