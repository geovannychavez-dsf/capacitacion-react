import { Grid } from '@mui/material';

import { CharacterCard } from './CharacterCard';
import { Character } from '../interfaces/rick-api.interface';
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
