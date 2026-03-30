import axios from 'axios';

import { handleRequest } from '../interceptors/handelreq-api.interceptor';

const API_BASE_URL = import.meta.env.VITE_API_SERVICE_V1;
const axiosIntancesService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosIntancesService.interceptors.request.use(handleRequest);
export default axiosIntancesService;
