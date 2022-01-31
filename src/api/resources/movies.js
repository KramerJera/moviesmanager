import ApiService from "../api.service";

const Movies = {
  listMovies: (params) => ApiService.get(`/profiles/${params.profileId}/movies`),
  searchMovie: (params) => ApiService.get(`/profiles/${params.profileId}/movies/search/${params.searchTerm}`, params),
  addToWatchlist: (params) => ApiService.post(`/profiles/${params.profile_id}/movies`, params),
}

export default Movies