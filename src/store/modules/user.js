import Accounts from '@/api/resources/accounts'

const state = {
  user: null,
  hasSession: false,
  token: '',
}

const getters = {
  currentUser: () => (state.user),
  hasSession: () => (state.hasSession),
  getToken: () => (state.getToken),
}

const actions = {
  addUser({ commit }, payload) {
    commit('setUser', payload);
    if (payload) {
      commit('setSession'. true)
    }
  },
  addToken({ commit }, payload) {
    commit('setToken', payload)
  },
  createUser({ commit }, payload) {
    Accounts.signup(payload).then((response) => {
      console.log(response)
      commit('setUser', payload),
      commit('setSession', payload)
    })
  }
}

const mutations = {
  setUser($state, payload) {
    const stateCopy = $state;
    stateCopy.user = payload;
  },
  setSession($state, payload) {
    const stateCopy = $state;
    stateCopy.hasSession = payload;
  },
  setToken($state, payload) {
    const stateCopy = $state;
    stateCopy.token = payload;
  }
}

export default {
  state,
  actions,
  getters,
  mutations,
}