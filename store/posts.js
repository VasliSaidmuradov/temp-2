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
    const resp = await this.$api.get(`/articles/${payload}`);
    console.log('post: ', resp);
    store.commit('SET_POST', resp);
  },
  async fetchPosts(store, payload) {
    if (typeof payload === 'string') {
      if (payload.indexOf('?') != -1) {
        payload += '&'
      } else {
        payload += '?'
      }
      payload += 'per_page=9'
      const resp = await this.$api.get(payload);
      store.commit('SET_POSTS', resp)
    } else {
      const resp = await this.$api.get('/articles', payload);
      store.commit('SET_POSTS', resp)
    }
  }
}

export const getters = {
  GET_POST: state => state.post,
  GET_POSTS: state => state.posts,
}
