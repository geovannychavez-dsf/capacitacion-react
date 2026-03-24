import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import * as motion from 'motion/react-client';
import { Character } from '../interfaces/rick-and-morty-interface';

export const CharacterCard = ({ character }: { character: Character }) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Card sx={{ width: 260 }}>
        <CardMedia
          sx={{ height: 180, width: 260 }}
          height={180}
          width={290}
          component="img"
          image={character.image}
          alt={character.name}
        />
        <CardContent>
          <Typography variant="h6">{character.name}...</Typography>
          <Typography variant="body2">
            <Typography variant="caption">Status: {character.status}</Typography>
            <Typography variant="caption">Species: {character.species}</Typography>
            <Typography variant="caption">Gender: {character.gender}</Typography>
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};
