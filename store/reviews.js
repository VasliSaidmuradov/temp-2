export const state = () => ({
	reviews: null,
})

export const mutations = {
	SET_REVIEWS: (state, payload) => state.reviews = payload,
}

export const actions = {
	async fetchReviews(store, payload) {
		const resp = await this.$api.get('/reviews', payload);
		store.commit('SET_REVIEWS', resp)
	},
	// async sendReview(store, payload) {
	//   const header = {
	//     headers: {
	//       'Content-Type': 'multipart/form-data; boundary=' + payload._boundary
	//     }
	//   }
	//   console.log(':: ', payload.get('data'));
	//   // return
	//   const resp = await this.$api.post('/feedback', payload);
	//   console.log(resp);
	//   return resp;
	// }
}

export const getters = {
	GET_REVIEWS: state => state.reviews,
}
