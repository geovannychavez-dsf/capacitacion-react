import { IRickAndMortyResponse, ICharacter } from "../interfaces/rick-and-morty-interface";

const API_BASE_URL = "https://rickandmortyapi.com/api";

export class RickAndMortyService {
  /**
   * Obtiene la lista de personajes de Rick and Morty
   * @param page entero que representa la página a consultar, por defecto es 1
   * @returns promesa con la respuesta de la API formateada como IRickAndMortyResponse
   */
  async getCharacters(page: number = 1): Promise<IRickAndMortyResponse> {
    const response = await fetch(`${API_BASE_URL}/character?page=${page}`);
    if (!response.ok) {
      throw new Error(`Error  ${response.statusText}`);
    }
    return response.json();
  }

  /**
   * Obtiene un personaje específico de Rick and Morty por su ID
   * @param id entero que representa el ID del personaje a consultar
   * @returns promesa con la respuesta de la API formateada como ICharacter
   */
  async getCharacterById(id: number): Promise<ICharacter> {
    const response = await fetch(`${API_BASE_URL}/character/${id}`);
    if (!response.ok) {
      throw new Error(`Error  ${response.statusText}`);
    }
    return response.json();
  }
}

export const rickAndMortyService = new RickAndMortyService();
