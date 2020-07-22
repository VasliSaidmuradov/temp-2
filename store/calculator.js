export const state = () => ({
  paymentShedule: null,
})

export const mutations = {
  SET_PAYMENT_SHEDULE: (state, payload) => state.paymentShedule = payload,
}

export const actions = {
  async fetchPaymentShedule(store, payload) {
    // return
    const url = 'https://api.cashu.kz/public/payment-schedule/simulate';
    const query = `?amount=${payload.amount}&term=${payload.term}&group=${payload.group}${payload.promoCode ? '&promoCode=' + payload.promoCode : ''}`
    // console.log('payload: ', payload);
    // console.log('req URL: ', `${url}${query}`);

    const resp = await this.$axios.get(`${url}${query}`);
    store.commit('SET_PAYMENT_SHEDULE', resp.data);
  }
}

export const getters = {
  GET_PAYMENT_SHEDULE: state => state.paymentShedule ? {
      ...state.paymentShedule,
      interest: Math.round(state.paymentShedule.interest)
  } : null,
}
