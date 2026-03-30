import { Character } from '../interfaces/rick-api.interface';

export const characterAdapter = ({ characters }: { characters: Character[] }): Character[] => {
  return characters.map((character: Character) => ({
    id: character.id,
    name: character.name.substring(0, 12),
    status: character.status,
    species: character.species,
    type: character.type,
    gender: character.gender,
    image: character.image,
  }));
};
