import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

const axiosInstance = axios.create({
  baseURL: '/api/v1',
});

axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

Vue.use(VueAxios, axiosInstance);

export default axiosInstance;
