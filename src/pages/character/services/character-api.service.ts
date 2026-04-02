import axios from 'axios';

import { ApiError } from '../../../core/api-error';
import axiosIntancesService from '../../../services/axion-intances.service';
import { CHARACTER_PATH, MESSAGE_ERROR } from '../constants/character-const.constant';
import { Character, CharacterCreate } from '../interfaces/rick-api.interface';

export class CharacterApiService {
  async getCharacterById(id: number): Promise<Character> {
    try {
      const { data } = await axiosIntancesService.get(`/characters/${id}`);
      const { data: character } = data;
      return character;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          throw new ApiError(error.response.status, error.response.data.message);
        }
      }
      throw new ApiError(500, 'Error en la peticion');
    }
  }
  async getCharacters(): Promise<Character[]> {
    try {
      const { data } = await axiosIntancesService.get(`${CHARACTER_PATH}`, {
        signal: AbortSignal.timeout(5000),
      });
      const { data: character } = data;
      return character;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          throw new ApiError(error.response.status, error.response.data.message);
        }
      }
      throw new ApiError(500, MESSAGE_ERROR);
    }
  }
  async createCharacter(character: CharacterCreate): Promise<Character> {
    try {
      const { data } = await axiosIntancesService.post(`${CHARACTER_PATH}`, character);
      const { data: characterData } = data;
      return characterData;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          throw new ApiError(error.response.status, error.response.data.message);
        }
      }
      throw new ApiError(500, MESSAGE_ERROR);
    }
  }

  async deleteCharacter(id: number): Promise<Character> {
    try {
      const { data } = await axiosIntancesService.delete(`${CHARACTER_PATH}/${id}`);
      const { data: characterData } = data;
      return characterData;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          throw new Error(error.response.data);
        }
      }
      throw new ApiError(500, MESSAGE_ERROR);
    }
  }

  async updateCharacter(character: Character): Promise<Character> {
    try {
      const { id, ...characters } = character;
      const { data } = await axiosIntancesService.put(`${CHARACTER_PATH}/${id}`, characters);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          throw new ApiError(error.response.status, error.response.data.message);
        }
      }
      throw new ApiError(500, MESSAGE_ERROR);
    }
  }
}

export const characterApiService = new CharacterApiService();
