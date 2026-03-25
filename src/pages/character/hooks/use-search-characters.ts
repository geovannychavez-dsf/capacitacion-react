import { useMemo, useState } from 'react';
import { Character } from '../interfaces/rick-and-morty-interface';
export const useSearchCharacters = (characters: Character[]) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredCharacters = useMemo(() => {
    return characters.filter((character: Character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm, characters]);

  return {
    searchTerm,
    setSearchTerm,
    filteredCharacters,
  };
};
