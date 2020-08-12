export const state = () => ({
	modalOpen: false,
	langs: null,
	currentLang: 'ru',
})

export const mutations = {
	setModal: (state, payload) => state.modalOpen = payload,
	SET_LANGS: (state, payload) => state.langs = payload,
	SET_CURRENT_LANG: (state, payload) => {
		state.currentLang = payload
	},
}

export const actions = {
	async fetchLangs(store) {
		const resp = await this.$api.get('/langs')
		store.commit('SET_LANGS', resp);
	},
	getLangFromLocalStorage() {
		if (process.browser) {
			if (localStorage.getItem('lang')) {
				const lang = localStorage.getItem('lang');
				// console.log(lang)
			}
		}
	},
	fetchCurrentLang(store, payload) {
		console.log(payload);
		store.commit('SET_CURRENT_LANG', payload);
	}
}

export const getters = {
	getModal: state => state.modalOpen,
	GET_LANGS: state => state.langs,
	GET_CURRENT_LANG: state => state.currentLang,
}
