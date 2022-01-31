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
      commit('setMovies', response)
    })
  },
  search({ commit }, payload) {
    commit('clearSearchResults')
    Movies.searchMovie(payload).then((response) => {
      commit('setSearchResult', response)
    })
  },
  addMovieToWatchlist({ dispatch }, payload) {
    Movies.addToWatchlist(payload).then((response) => {
      console.log(response)
      var params = {
        profileId: payload.profile_id
      }
      dispatch('listMovies', params)
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