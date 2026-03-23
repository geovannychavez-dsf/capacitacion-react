
import { ApiError } from "../../../core/api-error";

const API_BASE_URL = import.meta.env.VITE_API_CHARACTER;
import axios from "axios";
import type { ICharacter, IRickAndMortyResponse } from "../interfaces/rick-and-morty-interface";
export class RickAndMortyService {
  /**
   * Obtiene la lista de personajes de Rick and Morty
   * @param page entero que representa la página a consultar, por defecto es 1
   * @returns promesa con la respuesta de la API formateada como IRickAndMortyResponse
   */
  async getCharacters(page: number = 1): Promise<IRickAndMortyResponse> {
    try {
      const { data } = await axios.get(`${API_BASE_URL}/character?page=${page}`,
      );
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
    const response = await fetch(`${API_BASE_URL}/character/${id}`);
    if (!response.ok) {
      throw new ApiError(response.status, response.statusText);
    }
    return response.json();
  }
}

export const rickAndMortyService = new RickAndMortyService();
