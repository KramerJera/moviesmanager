import ApiService from "../api.service";

const Movies = {
  getWatchlist: (params) => ApiService.get(`/profiles/${params.profile_id}/movies/watchlist`),
  getWatchedlist: (params) => ApiService.get(`/profiles/${params.profile_id}/movies/watched`),
  searchMovie: (params) => ApiService.get(`/profiles/${params.profile_id}/movies/search/${params.search_term}`, params),
  addToWatchlist: (params) => ApiService.post(`/profiles/${params.profile_id}/movies`, params),
  removeMovie: (params) => ApiService.delete(`/profiles/${params.profile_id}/movies/${params.id}`),
  updateMovie: (params) => ApiService.put(`/profiles/${params.profile_id}/movies/${params.id}`, params)
}

export default Movies