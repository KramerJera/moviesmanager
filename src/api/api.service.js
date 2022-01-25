import Vue from 'vue';

const ApiService = {

  get(resourcePath) {
    return new Promise((resolve) => {
      Vue.axios
        .get(resourcePath).then((response) => {
          resolve(response.data);
        }).catch(() => {
          //console.log('Error', error.response.status);
        });
    });
  },

  put(resourcePath, params) {
    return new Promise((resolve) => {
      Vue.axios
        .put(resourcePath, params).then((response) => {
          resolve(response.data);
        })
        .catch(() => {
          //console.log('Error', error.response.status);
        });
    });
  },

  post(resourcePath, params) {
    return new Promise((resolve) => {
      Vue.axios
        .post(`${resourcePath}`, params).then((response) => {
          resolve(response.data);
        }).catch(() => {
          //console.log('Error', error.response.status);
        });
    });
  },

  delete(resourcePath, params) {
    return new Promise((resolve) => {
      Vue.axios
        .delete(`${resourcePath}`, { data: params }).then((response) => {
          resolve(response.data);
        })
        .catch(() => {
          //console.log('Error', error.response.status);
        });
    });
  },

  query(resourcePath, params) {
    return new Promise((resolve) => {
      Vue.axios
        .get(`${resourcePath}`, { params }).then((response) => {
          resolve(response.data);
        })
        .catch(() => {
          //console.log('Error', error.response.status);
        });
    });
  },
};

export default ApiService;
