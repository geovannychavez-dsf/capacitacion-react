import axios from 'axios';

import { ApiError } from '../../../core/api-error';
import axiosIntancesService from '../../../services/axion-intances.service';
import { Character } from '../interfaces/rick-api.interface';

export class CharacterApiService {
  async getCharacterById(id: number): Promise<Character> {
    try {
      const { data } = await axiosIntancesService.get(`/character/${id}`);
      const { data: character } = data;
      return character;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          throw new ApiError(error.response.status, error.response.data.message);
        }
      }
      throw new Error('Error en la peticion');
    }
  }
  async getCharacters(): Promise<Character[]> {
    try {
      const { data } = await axiosIntancesService.get('/characters');
      const { data: character } = data;
      return character;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          throw new ApiError(error.response.status, error.response.data.message);
        }
      }
      throw new Error('Error en la peticion');
    }
  }
  async createCharacter(character: Character): Promise<Character> {
    try {
      const { data } = await axiosIntancesService.post('/character', character);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          throw new ApiError(error.response.status, error.response.data.message);
        }
      }
      throw new Error('Error en la peticion');
    }
  }

  async deleteCharacter(id: number): Promise<Character> {
    try {
      const { data } = await axiosIntancesService.delete(`/character/${id}`);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          throw new Error(error.response.data);
        }
      }
      throw new Error('Error en la peticion');
    }
  }

  async updateCharacter(id: number, character: Character): Promise<Character> {
    try {
      const { data } = await axiosIntancesService.put(`/character/${id}`, character);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          throw new ApiError(error.response.status, error.response.data.message);
        }
      }
      throw new Error('Error en la peticion');
    }
  }
}

export const characterApiService = new CharacterApiService();
