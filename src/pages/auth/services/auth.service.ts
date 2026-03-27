import axios from 'axios';

import { ApiError } from '../../../core/api-error';
import axiosIntancesService from '../../../services/axion-intances.service';
import { LoginInterface, ResponseInterface } from '../interfaces';

export class AuthService {
  async login({ email, password }: LoginInterface): Promise<ResponseInterface> {
    try {
      const { data } = await axiosIntancesService.post('/auth/login', { email, password });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          throw new ApiError(error.response.status, error.response.data.message);
        }
      }
      throw new ApiError(500, (error as Error).message);
    }
  }
}

export const authService = new AuthService();
