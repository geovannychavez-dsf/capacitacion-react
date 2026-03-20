import { ICharacter } from "../../interfaces/rick-and-morty-interface";

export const CharacterCardScreen = ({ character }: { character: ICharacter }) => {
    return (
        <div className="character-card-screen">
            <h1>{character.name}</h1>
            <p>{character.status}</p>
            <p>{character.species}</p>
        </div>
    );
}   
