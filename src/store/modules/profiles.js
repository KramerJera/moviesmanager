import Profiles from '@/api/resources/profiles'

const state = {
  accountProfiles: [],
  selectedProfile: '',
}

const getters = {
  getProfiles: () => (state.accountProfiles),
  getSelectedProfile: () => (state.selectedProfile),
  getLocalStorageProfileName: () => (JSON.parse(window.localStorage.getItem('PROFILE_NAME'))),
  getLocalStorageProfileId: () => (JSON.parse(window.localStorage.getItem('PROFILE_ID'))),
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
  selectProfile({ commit }, payload) {
    commit('setSelectedProfile', payload)
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
  setSelectedProfile($state, payload) {
    const stateCopy = $state;
    stateCopy.selectedProfile = payload;
    window.localStorage.setItem('PROFILE_NAME', JSON.stringify(payload.name));
    window.localStorage.setItem('PROFILE_ID', JSON.stringify(payload.id));
  }
}

export default {
  state,
  actions,
  getters,
  mutations,
}