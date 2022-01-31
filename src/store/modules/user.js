import Accounts from '@/api/resources/accounts'

const state = {
  user: null,
  hasSession: false,
  token: '',
}

const getters = {
  currentUser: () => (state.user),
  hasSession: () => (state.hasSession),
  getToken: () => (state.token),
}

const actions = {
  addUser({ commit }, payload) {
    commit('setUser', payload);
    if (payload) {
      commit('setSession', true)
    }
  },
  addToken({ commit }, payload) {
    commit('setToken', payload)
  },
  createUser({ dispatch }, payload) {
    Accounts.signup(payload).then((response) => {
      dispatch('addUser', payload),
      dispatch('addToken', response.csrf)
    })
  },
  loginUser({ dispatch }, payload) {
    Accounts.signin(payload).then((response) => {
      dispatch('addUser', payload),
      dispatch('addToken', response.csrf)
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
    window.localStorage.setItem('HAS_SESSION', JSON.stringify(payload));
  },
  setToken($state, payload) {
    const stateCopy = $state;
    stateCopy.token = payload;
    window.localStorage.setItem('ACCESS_TOKEN', JSON.stringify(payload));
  }
}

export default {
  state,
  actions,
  getters,
  mutations,
}