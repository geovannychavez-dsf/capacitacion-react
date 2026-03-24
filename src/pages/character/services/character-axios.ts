import axios from 'axios';
import { handleResponse, handleResponseError } from './interceptor/handel-reponse';
import { handleRequestCharter } from './interceptor';
const API_BASE_URL = import.meta.env.VITE_API_CHARACTER;
const chartersAxios = axios.create({
  baseURL: API_BASE_URL,
});
chartersAxios.interceptors.request.use(handleRequestCharter);
chartersAxios.interceptors.response.use(handleResponse, handleResponseError);
export default chartersAxios;
