import axios from 'axios';

import { handleResponseError } from '../interceptors';
import { handleRequest } from '../interceptors/handelreq-api.interceptor';

const API_BASE_URL = import.meta.env.VITE_API_SERVICE_V1;
const axiosIntancesService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosIntancesService.interceptors.request.use(handleRequest);
axiosIntancesService.interceptors.response.use((response) => response, handleResponseError);
export default axiosIntancesService;
