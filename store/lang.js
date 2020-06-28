export const state = () => ({
    modalOpen: false
})

export const getters = {
    getModal: state => state.modalOpen
}

export const mutations = {
    setModal: (state, payload) => state.modalOpen = payload
}