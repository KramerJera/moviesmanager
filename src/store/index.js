import Vue from 'vue';
import Vuex from 'vuex';

import User from './modules/user'
import Profile from './modules/profiles'
import Movie from './modules/movies'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    User,
    Profile,
    Movie
  },
});