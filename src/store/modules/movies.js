import Movies from '@/api/resources/movies'

const state = {
  movies: []
}

const getters = {
  getMovies: () => (state.movies)
}

const actions = {
  listMovies({ commit }, payload) {
    commit('clearMovies')
    Movies.listMovies(payload).then((response) => {
      commit('setProfiles', response)
    })
  }
}

const mutations = {
  setMovies($state, payload) {
    const stateCopy = $state;
    stateCopy.movies = stateCopy.movies.concat(payload);
  },
  clearMovies($state) {
    const stateCopy = $state;
    stateCopy.movies = [];
  },
}

export default {
  state,
  actions,
  getters,
  mutations,
}