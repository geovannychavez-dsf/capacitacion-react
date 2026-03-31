import { useQueryClient } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useFetchApicharcter } from './useFetchApicharcter';
import { TOKEN } from '../../auth/constants/auth-constants';
import { CHARACTER_QUERY_ID } from '../constants/character-constants';
import { Character } from '../interfaces/rick-api.interface';
export const useSearchCharacters = () => {
  const queryClient = useQueryClient();
  const { characters: charactersApi, error, isLoading } = useFetchApicharcter();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [open, setOpen] = useState(false);
  const filteredCharacters = useMemo(() => {
    return charactersApi?.filter((character: Character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm, charactersApi]);
  function closeSesion() {
    navigate('/login');
    sessionStorage.removeItem(TOKEN);
  }
  function handleOpen() {
    setOpen(true);
    queryClient.setQueryData([CHARACTER_QUERY_ID], { id: 0 });
  }
  return {
    searchTerm,
    setSearchTerm,
    filteredCharacters,
    open,
    setOpen,
    closeSesion,
    error,
    isLoading,
    handleOpen,
  };
};
