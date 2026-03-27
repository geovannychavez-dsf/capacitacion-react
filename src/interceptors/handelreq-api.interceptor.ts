import type { InternalAxiosRequestConfig } from 'axios';

import { TOKEN } from '../pages/auth/constants/auth-constants';

export const handleRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const token = localStorage.getItem(TOKEN);
  if (token) {
    config.headers['Authorization'] = token ? `Bearer ${token}` : '';
  }
  return config;
};
