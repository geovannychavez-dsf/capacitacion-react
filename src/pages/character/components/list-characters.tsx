import { Grid } from '@mui/material';
import { CharacterCard } from './card-characters';
import { Character } from '../interfaces/rick-and-morty-interface';
export const ListCharacter = ({ characters }: { characters: Character[] }) => {
  return (
    <Grid container spacing={2}>
      {characters.map((character: Character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
      {characters.length === 0 && <p>No hay datos</p>}
    </Grid>
  );
};
