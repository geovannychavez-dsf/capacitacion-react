import { useQuery } from '@tanstack/react-query';

import { characterAdapter } from '../adapters/character-adacter.adapter';
import { CHARACTER_QUERY } from '../constants/character-constants';
import { characterApiService } from '../services/character-api.service';

export const useFetchApicharcter = () => {
  const {
    data: characters,
    isLoading,
    error,
  } = useQuery({
    queryKey: [CHARACTER_QUERY],
    queryFn: () =>
      characterApiService
        .getCharacters()
        .then((character) => characterAdapter({ characters: character })),
    staleTime: Infinity,
  });

  return { characters, error, isLoading };
};
