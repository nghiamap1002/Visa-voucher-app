import axios from 'axios';
import { BASE_URL } from './appDomain';

// ========== SERVICE SETUP ==========

const refreshToken = (data: any) => {
  return axios.post(`${BASE_URL}/auth/refresh-token`, { ...data });
};

const authService = {
  refreshToken,
};

export default authService;
