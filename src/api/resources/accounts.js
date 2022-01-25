import ApiService from "../api.service";

const Accounts = {
  signup: (user) => ApiService.post('/signup', user),
}

export default Accounts