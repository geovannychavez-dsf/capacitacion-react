import axios from 'axios';

import { chartersRickapi } from '.';
import { ApiError } from '../../../core/api-error';
import { INICIO_PAGE_CHARACTER } from '../constants/character-constants';
import { Character, RickAndMortyResponse } from '../interfaces/rick-api.interface';
export class RickAndMortyService {
  /**
   * Obtiene la lista de personajes de Rick and Morty
   * @param page entero que representa la página a consultar, por defecto es 1
   * @returns promesa con la respuesta de la API formateada como IRickAndMortyResponse
   */
  async getCharacters(
    page: number = INICIO_PAGE_CHARACTER,
    abortSignal: AbortSignal,
  ): Promise<RickAndMortyResponse> {
    try {
      const { data } = await chartersRickapi.get(`/character?page=${page}`, {
        signal: abortSignal,
      });
      return data;
    } catch (error) {
      if (axios.isCancel(error) || axios.isAxiosError(error)) {
        if (error.response) {
          throw new ApiError(error.response.status, error.response.data);
        }
      }
      throw new ApiError(500, (error as Error).message);
    }
  }

  /**
   * Obtiene un personaje específico de Rick and Morty por su ID
   * @param id entero que representa el ID del personaje a consultar
   * @returns promesa con la respuesta de la API formateada como ICharacter
   */
  async getCharacterById(id: number): Promise<Character> {
    try {
      const { data } = await chartersRickapi.get(`/character/${id}`);
      return data as Character;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          throw new ApiError(error.response.status, error.response.data);
        }
      }
      throw new ApiError(500, (error as Error).message);
    }
  }
}

export const rickAndMortyService = new RickAndMortyService();
