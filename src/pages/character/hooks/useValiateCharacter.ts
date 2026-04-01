import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { useCharacterCrud } from './useCharacterCrud';
import { CHARACTER_QUERY_ID } from '../constants/character-const.constant';
import { Character, CharacterCreate } from '../interfaces/rick-api.interface';

export const useValiateCharacter = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const queryClient = useQueryClient();
  const initialValues = z.object({
    name: z.string().nonempty({ message: 'El nombre es requerido' }),
    status: z.string().nonempty({ message: 'El nombre es requerido' }),
    species: z.string().nonempty({ message: 'La especie es requerido' }),
    type: z.string().nonempty({ message: 'El tipo es requerido' }),
    gender: z.string().nonempty({ message: 'El genero es requerido' }),
    image: z.url({ message: 'La imagen no es valida' }),
  });
  type FormData = z.infer<typeof initialValues>;
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(initialValues),
  });

  const { createCharacter, updateCharacter } = useCharacterCrud();
  const characterById = queryClient.getQueryData<Character>([CHARACTER_QUERY_ID]) as Character;
  const handelFormSubmit = async (character: CharacterCreate) => {
    if (characterById.id === 0) {
      await createCharacter.mutateAsync(character);
    } else {
      await updateCharacter.mutateAsync({ ...character, id: characterById.id });
    }
    reset();
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
    reset();
  };
  useEffect(() => {
    reset(characterById);
  }, [open, characterById, reset]);
  return {
    register,
    handleSubmit: handleSubmit(handelFormSubmit),
    errors,
    watch,
    reset,
    characterById,
    isPending: createCharacter.isPending || updateCharacter.isPending,
    handleClose,
  };
};
