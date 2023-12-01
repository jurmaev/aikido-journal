import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { getToken } from './token';

const BACKEND_URL = 'http://127.0.0.1:8000';
const REQUEST_TIMEOUT = 5000;

export const createApi = (): AxiosInstance => {
  const api = axios.create({ baseURL: BACKEND_URL, timeout: REQUEST_TIMEOUT });

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response) {
        const detailMessage = error.response.data;
        // toast.warn(detailMessage.message);
        console.log(detailMessage);
      }
      throw error;
    }
  );

  return api;
};
