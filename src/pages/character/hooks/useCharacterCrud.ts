import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { ApiError } from '../../../core/api-error';
import { CHARACTER_QUERY, DURATION } from '../constants/character-constants';
import type { Character } from '../interfaces/rick-api.interface';
import { characterApiService } from '../services/character-api.service';

export const useCharacterCrud = () => {
  const queryClient = useQueryClient();

  const createCharacter = useMutation<
    Character,
    ApiError,
    Character,
    { previousCharacters?: Character[] }
  >({
    mutationFn: async (newCharacter: Partial<Character>) => {
      const character = await characterApiService.createCharacter(newCharacter);
      return character;
    },
    onMutate: async (newCharacter: Character) => {
      await queryClient.cancelQueries({ queryKey: [CHARACTER_QUERY] });
      const previousCharacters = queryClient.getQueryData<Character[]>([CHARACTER_QUERY]);
      queryClient.setQueryData([CHARACTER_QUERY], (old: Character[] = []) => [
        ...old,
        { ...newCharacter, id: Date.now() },
      ]);
      return { previousCharacters };
    },
    onError: (error, newCharar, context) => {
      if (error instanceof ApiError) {
        toast.error(error.message + ' no se agrego ' + newCharar.name, { duration: DURATION });
      }
      if (context?.previousCharacters) {
        queryClient.setQueryData([CHARACTER_QUERY], context.previousCharacters);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [CHARACTER_QUERY] });
    },
  });

  const updateCharacter = useMutation<
    Character,
    ApiError,
    Character,
    { previousCharacters?: Character[] }
  >({
    onMutate: async (newCharacter: Character) => {
      await queryClient.cancelQueries({ queryKey: [CHARACTER_QUERY] });
      const previousCharacters = queryClient.getQueryData<Character[]>([CHARACTER_QUERY]);
      queryClient.setQueryData([CHARACTER_QUERY], (previousCharacters: Character[] = []) => [
        ...previousCharacters,
        { ...newCharacter, id: Date.now() },
      ]);
      return { previousCharacters };
    },
    mutationFn: async (newCharacter: Character) => {
      const character = await characterApiService.updateCharacter(newCharacter);
      toast.success('Personaje actualizado', { duration: DURATION });
      return character;
    },
    onError: (error, newCharar, context) => {
      if (error instanceof ApiError) {
        toast.error(' no se actualizo ' + newCharar.name + ' ' + error.message, {
          duration: DURATION,
        });
      }
      if (context?.previousCharacters) {
        queryClient.setQueryData([CHARACTER_QUERY], context.previousCharacters);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CHARACTER_QUERY] });
    },
  });
  const deleteCharacter = useMutation<number, ApiError, number>({
    onMutate: async (id: number) => {
      await queryClient.cancelQueries({ queryKey: [CHARACTER_QUERY] });
      const previousCharacters = queryClient.getQueryData([CHARACTER_QUERY]);
      queryClient.setQueryData([CHARACTER_QUERY], (previousCharacters: Character[] = []) => [
        ...previousCharacters.filter((character) => character.id !== id),
      ]);
      return { previousCharacters };
    },
    mutationFn: async (id: number) => {
      await characterApiService.deleteCharacter(id);
      return id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CHARACTER_QUERY] });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [CHARACTER_QUERY] });
    },
    onError: (error) => {
      if (error instanceof ApiError) {
        toast.error(error.message, { duration: DURATION });
      }
    },
  });
  return {
    createCharacter,
    updateCharacter,
    deleteCharacter,
  };
};
