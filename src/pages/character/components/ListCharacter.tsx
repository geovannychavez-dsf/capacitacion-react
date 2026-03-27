import { Grid, Typography } from '@mui/material';

import { CharacterCard } from './CharacterCard';
import { Character } from '../interfaces/rick-and-morty.interface';

interface ListCharacterProps {
  characters: Character[];
}

export const ListCharacter = ({ characters }: ListCharacterProps) => {
  if (characters.length === 0) {
    return (
      <Typography variant="body1" sx={{ textAlign: 'center', color: 'text.secondary', py: 4 }}>
        No se encontraron personajes para la busqueda actual.
      </Typography>
    );
  }

  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      {characters.map((character: Character) => (
        <Grid key={character.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <CharacterCard character={character} />
        </Grid>
      ))}
    </Grid>
  );
};
