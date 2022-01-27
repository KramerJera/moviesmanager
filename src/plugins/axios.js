import axios from 'axios';
import Vue from 'vue';
import store from '../store';

const baseConfig = {
  baseURL: 'http://localhost:3000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
}

const axiosInstance = axios.create(baseConfig);

axiosInstance.interceptors.request.use(
  (config) => {
    const token = store.getters.getToken;
    const storageToken = JSON.parse(window.localStorage.getItem('ACCESS_TOKEN'));
    var requestToken = token;

    if (token || storageToken) {
      
      requestToken = token || storageToken;
    }

    config.headers = {
      ...config.headers,
      'X-CSRF-TOKEN': requestToken
    }

    return config;
  }, 
  (error) => {
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue) {
  Vue.axios = axiosInstance;
  window.axios = axiosInstance;
  Object.defineProperties(Vue.prototype, {
    $axios: {
      get() {
        return axiosInstance;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;