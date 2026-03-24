import type { AxiosError, AxiosResponse } from 'axios';

export const handleResponse = (response: AxiosResponse): AxiosResponse => response;

export const handleResponseError = async (error: AxiosError): Promise<AxiosError> => {
  return error;
};
