import { Grid } from "@mui/material";
import { CharacterCard } from "./card-characters";
import type { ICharacter } from "../interfaces/rick-and-morty-interface";
export const ListCharacter = ({ characters }: { characters: ICharacter[] }) => {
  return (
    <Grid container spacing={2}>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </Grid>
  );
};
