export const state = () => ({
  faq: null,
})

export const mutations = {
  SET_FAQ: (state, payload) => state.faq = payload,
}

export const actions = {
  async fetchFaq(store, payload) {
    const resp = await this.$api.get(`/faq`);
    store.commit('SET_FAQ', resp);
  },
}

export const getters = {
  GET_FAQ: state => state.faq,
}
