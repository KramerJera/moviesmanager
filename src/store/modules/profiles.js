import Profiles from '@/api/resources/profiles'

const state = {
  accountProfiles: [],
  currentProfile: []
}

const getters = {
  getProfiles: () => (state.accountProfiles),
  getCurrentProfile: () => (state.currentProfile),
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
  },
  getProfileInfos({ commit }, payload) {
    Profiles.getProfile(payload).then((response) => {
      commit('setCurrentProfile', response)
    })
  }
}

const mutations = {
  setProfiles($state, payload) {
    const stateCopy = $state;
    stateCopy.accountProfiles = stateCopy.accountProfiles.concat(payload);
  },
  clearProfiles($state) {
    const stateCopy = $state;
    stateCopy.accountProfiles = [];
  },
  setCurrentProfile($state, payload) {
    const stateCopy = $state;
    stateCopy.currentProfile = payload;
  }
}

export default {
  state,
  actions,
  getters,
  mutations,
}