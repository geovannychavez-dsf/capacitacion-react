import axios from 'axios';

import { ApiError } from '../../../core/api-error';
import axiosIntancesService from '../../../services/axion-intances.service';
import { MESSAGE_ERROR } from '../constants/character-constants';
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
  async createCharacter(character: Omit<Partial<Character>, 'id'>): Promise<Character> {
    try {
      const cleanCharacter =
        (character as Character).id === 0
          ? (({ id, ...rest }) => rest)(character as Character)
          : character;
      const { data } = await axiosIntancesService.post('/characters', cleanCharacter);
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

  async updateCharacter(character: Omit<Character, 'id'>): Promise<Character> {
    try {
      const { id, ...cleanCharacter } = character as Character;
      const { data } = await axiosIntancesService.put(`/characters/${id}`, cleanCharacter);
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
