export const state = () => ({})

export const mutations = {
	PAGINATE: (state, payload) => {
		// console.log('paginate: ', payload)
		payload.resp.data.forEach(product => payload.paginator.data.push(product))
		payload.paginator.next_page_url = payload.resp.next_page_url
		payload.paginator.prev_page_url = payload.resp.prev_page_url
		payload.paginator.first_page_url = payload.resp.first_page_url
		payload.paginator.last_page_url = payload.resp.last_page_url

		payload.paginator.to = payload.resp.to
		payload.paginator.total = payload.resp.total

		payload.paginator.current_page = payload.resp.current_page
		payload.paginator.last_page = payload.resp.last_page
	},
}

export const actions = {
	async paginate(store, payload) {
		let url = payload.next_page_url
		if (!url || payload.current_page == payload.last_page) return
		if (url.indexOf('?') != -1) {
			url += '&'
		} else {
			url += '?'
		}
		url += `per_page=${payload.per_page}`
		// console.log('pag: ', url, payload)
		store.commit('PAGINATE', {
			paginator: payload,
			resp: await this.$api.get(url),
		})
	},
}
