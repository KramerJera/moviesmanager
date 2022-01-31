import ApiService from "../api.service";

const Movies = {
  listMovies: (params) => ApiService.get(`/profiles/${params.profileId}/movies`, params),
  searchMovie: (params) => ApiService.get(`/profiles/${params.profileId}/movies/search/${params.searchTerm}`, params),
}

export default Movies