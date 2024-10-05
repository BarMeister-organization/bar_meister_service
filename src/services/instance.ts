import axios from "axios";

export const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
});

export const setAuthHeaders = (token: string | number | null) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};

