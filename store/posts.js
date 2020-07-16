export const state = () => ({
  post: null,
  posts: null,
})

export const mutations = {
  SET_POST: (state, payload) => state.post = payload,
  SET_POSTS: (state, payload) => state.posts = payload,
}

export const actions = {
  async fetchPost(store, payload) {
    const resp = await this.$api.get(`articles/${payload}`);
    store.commit('SET_POST', resp)
  },
  async fetchPosts(store) {
    const resp = await this.$api.get('articles');
    store.commit('SET_POSTS', resp)
  }
}

export const getters = {
  GET_POST: state => state.post,
  GET_POSTS: state => state.posts,
}
