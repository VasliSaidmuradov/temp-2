export const state = () => ({})

export const mutations = {}

export const actions = {
  async nuxtServerInit({ state, dispatch, commit }, {req, res, app, route }) {
    const queue = [
      dispatch('lang/fetchLangs')
    ]

    await Promise.all(queue)
  }
}

export const getters = {}
