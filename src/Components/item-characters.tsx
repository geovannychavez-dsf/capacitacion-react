import { ICharacter } from "../interfaces/rick-and-morty-interface";

export const ItemCharacter = ({ ...character }: ICharacter) => {
  return (
    <div className="item-character">
      <img loading="lazy" src={character.image} alt={character.name}  />
      <h3>{character.name}</h3>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p> Gender: {character.gender}</p>
    </div>
  );
};
