import Profiles from '@/api/resources/profiles'

const state = {
  profiles: [],
}

const getters = {
  getProfiles: () => (state.profiles),
}

const actions = {
  listProfiles({ commit }) {
    commit('clearProfiles')
    Profiles.listProfiles().then((response) => {
      commit('setProfiles', response)
    })
  },
  createProfile({ dispatch }, payload) {
    Profiles.createProfile(payload).then((response) => {
      console.log(response)
      dispatch('listProfiles', payload)
    })
  },
  deleteProfile({ dispatch }, payload) {
    Profiles.deleteProfile(payload).then((response) => {
      console.log(response)
      dispatch('listProfiles', payload)
    })
  }
}

const mutations = {
  setProfiles($state, payload) {
    const stateCopy = $state;
    stateCopy.profiles = stateCopy.profiles.concat(payload);
  },
  clearProfiles($state) {
    const stateCopy = $state;
    stateCopy.profiles = [];
  }
}

export default {
  state,
  actions,
  getters,
  mutations,
}