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

axiosInstance.interceptors.response.use(null, error => {
  const token = store.getters.getToken;
  const storageToken = JSON.parse(window.localStorage.getItem('ACCESS_TOKEN'));
  var requestToken = token;

  if (token || storageToken) {  
    requestToken = token || storageToken;
  }

  if (error.response && error.response.config && error.response.status === 401) {
    // In case 401 is caused by expired access cookie - we'll do refresh request
    return axiosInstance.post('/refresh', {}, { headers: { 'X-CSRF-TOKEN': requestToken } })
      .then(response => {
        window.localStorage.setItem('ACCESS_TOKEN', JSON.stringify(response.data.csrf));
        window.localStorage.setItem('HAS_SESSION', JSON.stringify(true));
        // And after successful refresh - repeat the original request
        let retryConfig = error.response.config
        retryConfig.headers['X-CSRF-TOKEN'] = localStorage.csrf
        return axiosInstance.request(retryConfig)
      }).catch(error => {
        window.localStorage.removeItem('ACCESS_TOKEN');
        window.localStorage.removeItem('HAS_SESSION');
        // redirect to signin in case refresh request fails
        location.replace('/')
        return Promise.reject(error)
      })
  } else {
    return Promise.reject(error)
  }
});

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