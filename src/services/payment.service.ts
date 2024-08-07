import axiosInstance from './axiosInstance';
import { BASE_URL } from 'services/appDomain';

// ========== SERVICE SETUP ==========
const createPayment = (data: any) => {
  return axiosInstance.post(`${BASE_URL}/payment`, { ...data });
};

const paymentService = {
  createPayment,
};

export default paymentService;
