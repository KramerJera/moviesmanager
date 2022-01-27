import ApiService from "../api.service";

const Profiles = {
  listProfiles: () => ApiService.get('/profiles'),
  createProfile: (params) => ApiService.post('/profiles', params),
}

export default Profiles