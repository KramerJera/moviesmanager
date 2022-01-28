import ApiService from "../api.service";

const Profiles = {
  listProfiles: () => ApiService.get('/profiles'),
  createProfile: (params) => ApiService.post('/profiles', params),
  deleteProfile: (params) => ApiService.delete(`/profiles/${params.id}`),
  getProfile: (params) => ApiService.get(`/profiles/${params.profileId}`),
}

export default Profiles