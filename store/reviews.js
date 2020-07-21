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
  }
}

export const getters = {
    GET_REVIEWS: state => state.reviews,
}
