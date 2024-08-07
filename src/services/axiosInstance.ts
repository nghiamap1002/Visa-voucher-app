import axios from 'axios';
import { BASE_URL } from './appDomain';

const axiosInstance: any = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 200000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors
// Add a request interceptor
axiosInstance.interceptors.request.use(
  async function (config: any) {
    // Do something before request is sent
    // const accessToken = getAccessToken();
    return config;
  },
  function (error: any) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  async (response: any) => {
    return response;
  },
  async (err: any) => {
    return err;
  },
);

export default axiosInstance;
