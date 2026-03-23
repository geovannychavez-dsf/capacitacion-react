import type { AxiosError, AxiosResponse } from "axios";

export const handleResponse = (response: AxiosResponse): AxiosResponse => {
    response;
    return response
}

export const handleResponseError = async (error: AxiosError): Promise<any> => {
    if (error.response?.status === 500) {
        // logica de intersptor response 
    }
    return Promise.reject(error);
};
