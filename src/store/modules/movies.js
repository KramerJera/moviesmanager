import Movies from '@/api/resources/movies'

const state = {
  movies: [],
  searchResultMovies: []
}

const getters = {
  getMovies: () => (state.movies),
  getSearchResults: () => (state.searchResultMovies),
}

const actions = {
  listMovies({ commit }, payload) {
    commit('clearMovies')
    Movies.listMovies(payload).then((response) => {
      commit('setProfiles', response)
    })
  },
  search({ commit }, payload) {
    commit('clearSearchResults')
    Movies.searchMovie(payload).then((response) => {
      commit('setSearchResult', response)
    })
  },
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
  clearSearchResults($state) {
    const stateCopy = $state;
    stateCopy.searchResultMovies = [];
  },
  setSearchResult($state, payload) {
    const stateCopy = $state;
    stateCopy.searchResultMovies = stateCopy.searchResultMovies.concat(payload);
  },
}

export default {
  state,
  actions,
  getters,
  mutations,
}