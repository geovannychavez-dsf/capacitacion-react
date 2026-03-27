import { Card, CardContent, CardMedia, Chip, Stack, Typography } from '@mui/material';
import * as motion from 'motion/react-client';

import { Character } from '../interfaces/rick-and-morty.interface';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <motion.div
      initial={{ y: 18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.28 }}
      whileHover={{ y: -4 }}
    >
      <Card sx={{ width: '100%', overflow: 'hidden' }}>
        <CardMedia
          sx={{ height: 220, width: '100%', objectFit: 'cover' }}
          component="img"
          image={character.image}
          alt={character.name}
        />
        <CardContent>
          <Stack spacing={1.25}>
            <Typography variant="h6" noWrap>
              {character.name}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip label={character.status} size="small" color="primary" variant="outlined" />
              <Chip label={character.species} size="small" variant="outlined" />
              <Chip label={character.gender} size="small" variant="outlined" />
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
};
