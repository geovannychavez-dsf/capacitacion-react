import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { useCharacterCrud } from './useCharacterCrud';
import { CHARACTER_QUERY_ID, DURATION } from '../constants/character-constants';
import { Character } from '../interfaces/rick-api.interface';

export const useCardHook = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  const { deleteCharacter } = useCharacterCrud();
  const queryClient = useQueryClient();
  const handleDelete = (character: Character) => {
    toast.info('¿Estás seguro?', {
      description: 'Desea eliminar el personaje ' + character.name,
      position: 'top-center',
      action: {
        label: 'Eliminar',
        onClick: () => {
          deleteCharacter.mutate(character.id);
        },
      },
      closeButton: true,
      duration: DURATION,
    });
  };

  const handleOpen = (character: Character) => {
    setOpen(true);
    queryClient.setQueryData([CHARACTER_QUERY_ID], character);
  };

  return {
    handleDelete,
    handleOpen,
  };
};
