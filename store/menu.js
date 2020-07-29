export const state = () => ({
	menu: null,
	footerMenu: null,
	isMenuOpen: false
})

export const getters = {
	isAllReferencesLoaded(state) {
		return state.menu != null
	},
	GET_MENU(state) {
		return state.menu
	},
	GET_FOOTER_MENU(state) {
		return state.footerMenu
	},
	GET_MENU_MODAL: state => state.isMenuOpen
}

export const mutations = {
	SET_MENU: (state, payload) => {
		state.menu = payload.filter(menu => menu.level)
	},
	SET_MENU_MODAL: (state, payload) => state.isMenuOpen = payload,
	SET_FOOTER_MENU: (state, payload) => {
		state.footerMenu = payload.filter(menu => !menu.level)

		// let map = {}
		// state.footerMenu.forEach((item, index) => {
		//     item.children = []
		//     map[item.id] = index
		// })
		//
		// payload.forEach((item) => {
		//     if (item.level && state.footerMenu[map[item.level]]) {
		//         state.footerMenu[map[item.parent_id]].children.push(item)
		//     }
		// })
	}
}

export const actions = {
	async fetchMenu(store) {

		const menu = await this.$api.get('/menu-items');
		// console.log('fetch menu: ', menu);
		// return
		store.commit('SET_MENU', menu);
		store.commit('SET_FOOTER_MENU', menu);
	}
}
