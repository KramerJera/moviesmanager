import ApiService from "../api.service";

const Accounts = {
  signup: (user) => ApiService.post('/signup', user),
  signin: (user) => ApiService.post('/signin', user),
}

export default Accounts