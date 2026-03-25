import { Character } from '../interfaces/rick-and-morty-interface';

export const characterAdapter = ({ characters }: { characters: Character[] }): Character[] => {
  return characters.map((character: Character) => ({
    id: character.id,
    name: character.name.substring(0, 18),
    status: character.status,
    species: character.species,
    type: character.type,
    gender: character.gender,
    origin: character.origin,
    location: character.location,
    image: character.image,
    url: character.url,
    episode: character.episode,
    created: character.created,
  }));
};
