import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { ApiError } from '../../../core/api-error';
import { CHARACTER_QUERY } from '../constants/character-constants';
import type { Character, CharacterCreate } from '../interfaces/rick-api.interface';
import { characterApiService } from '../services/character-api.service';
import { ToastOpction } from '../styles/contaniner';

export const useCharacterCrud = () => {
  const queryClient = useQueryClient();

  const createCharacter = useMutation<
    CharacterCreate,
    ApiError,
    CharacterCreate,
    { previousCharacters?: Character[] }
  >({
    mutationFn: async (newCharacter: CharacterCreate) => {
      const character = await characterApiService.createCharacter(newCharacter);
      return character;
    },
    onMutate: async (newCharacter: CharacterCreate) => {
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
        toast.error(error.message + ' no se agrego ' + newCharar.name, ToastOpction);
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
      toast.success('Personaje actualizado', ToastOpction);
      return character;
    },
    onError: (error, newCharar, context) => {
      if (error instanceof ApiError) {
        toast.error(' no se actualizo ' + newCharar.name + ' ' + error.message, ToastOpction);
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
    mutationFn: async (id: number) => {
      await characterApiService.deleteCharacter(id);
      return id;
    },
    onMutate: async (id: number) => {
      await queryClient.cancelQueries({ queryKey: [CHARACTER_QUERY] });
      const previousCharacters = queryClient.getQueryData([CHARACTER_QUERY]);
      queryClient.setQueryData([CHARACTER_QUERY], (previousCharacters: Character[] = []) => [
        ...previousCharacters.filter((character) => character.id !== id),
      ]);
      return { previousCharacters };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CHARACTER_QUERY] });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [CHARACTER_QUERY] });
    },
    onError: (error) => {
      if (error instanceof ApiError) {
        toast.error(error.message, ToastOpction);
      }
    },
  });
  return {
    createCharacter,
    updateCharacter,
    deleteCharacter,
  };
};
