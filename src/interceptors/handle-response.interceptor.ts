import type { AxiosError } from 'axios';

export const handleResponseError = (error: AxiosError): Promise<never> => {
  if (error.response?.status === 401) {
    localStorage.clear();
    globalThis.location.href = '/login';
  }

  return Promise.reject(error);
};
