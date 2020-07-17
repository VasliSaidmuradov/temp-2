export const state = () => ({})

export const mutations = {}

export const actions = {
  async nuxtServerInit({ state, dispatch, commit }, {req, res, app, route }) {
    const paymentRequestData = {
      amount: 5000,
      term: 5,
      promoCode: null,
      group: 'BASIC',
    }
    const queue = [
      dispatch('lang/fetchLangs'),
      dispatch('calculator/fetchPaymentShedule', paymentRequestData)
    ]

    await Promise.all(queue)
  }
}

export const getters = {}
