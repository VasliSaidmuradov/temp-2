export const state = () => ({
  paymentShedule: null,
})

export const mutations = {
  SET_PAYMENT_SHEDULE: (state, payload) => state.paymentShedule = payload,
}

export const actions = {
  async fetchPaymentShedule(store, payload) {
    const query = {
      amount: 20000,
      term: 20,
    }
    const resp = await this.$axios.get(`https://api.cashu.kz/public/payment-schedule/simulate?amount=${query.amount}&term=${query.term}`);
    console.log('resp: ', resp)
    store.commit('SET_PAYMENT_SHEDULE', resp)
  }
}

export const getters = {
  GET_PAYMENT_SHEDULE: state => state.paymentShedule,
}
