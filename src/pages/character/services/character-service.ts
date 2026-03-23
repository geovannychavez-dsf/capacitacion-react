
import { ApiError } from "../../../core/api-error";
import axios from "axios";
import type { ICharacter, IRickAndMortyResponse } from "../interfaces/rick-and-morty-interface";
import { chartersAxios } from ".";
export class RickAndMortyService {
  /**
   * Obtiene la lista de personajes de Rick and Morty
   * @param page entero que representa la página a consultar, por defecto es 1
   * @returns promesa con la respuesta de la API formateada como IRickAndMortyResponse
   */
  async getCharacters(page: number = 1, signal: AbortSignal): Promise<IRickAndMortyResponse> {
    try {
      const { data } = await chartersAxios.get(`/character?page=${page}`,
        { signal: signal });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
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
  async getCharacterById(id: number): Promise<ICharacter> {
    try {
      const { data } = await chartersAxios.get(`/character/${id}`);
      return data;
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
