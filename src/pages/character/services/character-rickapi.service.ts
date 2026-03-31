import axios from 'axios';

import { handleRequestCharter } from '../interceptor';
const API_BASE_URL = import.meta.env.VITE_API_CHARACTER;
const chartersRickapi = axios.create({
  baseURL: API_BASE_URL,
});
chartersRickapi.interceptors.request.use(handleRequestCharter);
export default chartersRickapi;
