import Movies from '@/api/resources/movies'

const state = {
  watchlist: [],
  watchedList: [],
  searchResultMovies: []
}

const getters = {
  getWatchlist: () => (state.watchlist),
  getWatchedlist: () => (state.watchedList),
  getSearchResults: () => (state.searchResultMovies),
}

const actions = {
  getWatchlistMovies({ commit }, payload) {
    commit('clearWatchList')
    Movies.getWatchlist(payload).then((response) => {
      commit('setWatchlist', response)
    })
  },
  getWatchedlistMovies({ commit }, payload) {
    commit('clearWatchedlist')
    Movies.getWatchedlist(payload).then((response) => {
      commit('setWatchedlist', response)
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
      dispatch('getWatchlistMovies', payload)
      dispatch('getWatchedlistMovies', payload)
    })
  },
  removeMovie({ dispatch }, payload) {
    Movies.removeMovie(payload).then((response) => {
      console.log(response)
      dispatch('getWatchlistMovies', payload)
      dispatch('getWatchedlistMovies', payload)
    })
  },
  markMovieAsWatched({ dispatch }, payload) {
    Movies.updateMovie(payload).then((response) => {
      console.log(response)
      dispatch('getWatchedlistMovies', payload)
      dispatch('getWatchlistMovies', payload)
    })
  }
}

const mutations = {
  setWatchlist($state, payload) {
    const stateCopy = $state;
    stateCopy.watchlist = stateCopy.watchlist.concat(payload);
  },
  setWatchedlist($state, payload) {
    const stateCopy = $state;
    stateCopy.watchedList = stateCopy.watchedList.concat(payload);
  },
  clearWatchList($state) {
    const stateCopy = $state;
    stateCopy.watchlist = [];
  },
  clearWatchedlist($state) {
    const stateCopy = $state;
    stateCopy.watchedList = [];
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