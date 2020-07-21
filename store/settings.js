export const state = () => ({
  settings: null,
})

export const mutations = {
  SET_SETTINGS: (state, payload) => state.settings = payload,
}

export const actions = {
  async fetchSettings(store) {
    const resp = await this.$api.get('/settings');
    let data = {...resp};
    let arr = [...resp];
    let obj = {}

    for (let i in resp) {
      const key = resp[i].key;
      obj[key] = resp[i];
    }
    store.commit('SET_SETTINGS', obj);
  }
}

export const getters = {
  GET_SETTINGS: state => state.settings
}
