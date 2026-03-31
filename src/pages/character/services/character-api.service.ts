import axios from 'axios';

import { ApiError } from '../../../core/api-error';
import axiosIntancesService from '../../../services/axion-intances.service';
import { MESSAGE_ERROR } from '../constants/character-constants';
import { Character, CharacterCreate } from '../interfaces/rick-api.interface';

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
      throw new ApiError(500, 'Error en la peticion');
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
      throw new ApiError(500, MESSAGE_ERROR);
    }
  }
  async createCharacter(character: CharacterCreate): Promise<Character> {
    try {
      const { data } = await axiosIntancesService.post('/characters', character);
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
      const { data } = await axiosIntancesService.delete(`/characters/${id}`);
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
      const { data } = await axiosIntancesService.put(`/characters/${id}`, characters);
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
