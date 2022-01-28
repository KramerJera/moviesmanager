import ApiService from "../api.service";

const Movies = {
  listMovies: (params) => ApiService.get(`/profiles/${params.profileId}/movies`, params),
}

export default Movies