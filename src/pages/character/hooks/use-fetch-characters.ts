import { useEffect, useState } from 'react';
import { ApiError } from '../../../core/api-error';
import { rickAndMortyService } from '../services';
import { Character } from '../interfaces/rick-and-morty-interface';
import { characterAdapter } from '../adapters/character-adapter';

export const useFetchCharacters = () => {
  const [page, setPage] = useState<number>(1);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  /**
   * Consume el servicio para obtener los personajes de Rick and Morty, actualiza el estado de characters, loading y error según corresponda.
   * @param page entero que representa la página a consultar, por defecto es 1
   * @returns promesa que resuelve
   */

  useEffect(() => {
    const contoller = new AbortController();
    const fetchCharacters = async ({ page = 1 }: { page: number }): Promise<void> => {
      setError(null);
      setLoading(true);
      try {
        const characters = await rickAndMortyService.getCharacters(page, contoller.signal);
        const characterAdaptes = characterAdapter({ characters: characters.results });
        setCharacters(characterAdaptes);
        setLoading(false);
      } catch (error) {
        if (error instanceof ApiError) {
          setError(error.message);
        }
      } finally {
        if (!contoller.signal.aborted) {
          setLoading(false);
        }
      }
    };
    void fetchCharacters({ page }).catch(console.error);
    return () => {
      contoller.abort();
    };
  }, [page]);

  return { characters, loading, error, setPage, page };
};
