import { useQuery } from '@tanstack/react-query';

import { characterAdapter } from '../adapters/character-adacter.adapter';
import { characterApiService } from '../services/character-api.service';

export const useFetchApicharcter = () => {
  const {
    data: characters,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['characters'],
    queryFn: () =>
      characterApiService
        .getCharacters()
        .then((character) => characterAdapter({ characters: character })),
    staleTime: Infinity,
  });

  return { characters, error, isLoading };
};
