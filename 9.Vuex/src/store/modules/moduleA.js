import MUTATION from '../alias/mutations-type'
import ACTION from '../alias/actions-type'

export default {
  state: {
    name: 'FiringJ'
  },
  mutations: {
    [MUTATION.UPDATE_NAME](state, payload) {
      state.name = payload
    }
  },
  getters: {
    fullname(state) {
      return state.name + '111'
    },
    fullname2(state, getters) {
      return getters.fullname + '222'
    },
    fullname3(state, getters, rootState) {
      return getters.fullname2 + rootState.counter
    }
  },
  actions: {
    [ACTION.UPDATE_NAME](context) {
      setTimeout(() => {
        context.commit(MUTATION.UPDATE_NAME, 'HAM')
      }, 1000)
    }
  }
}
