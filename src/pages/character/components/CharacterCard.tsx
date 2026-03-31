import { Delete } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import * as motion from 'motion/react-client';

import { useCardHook } from '../hooks';
import { Character } from '../interfaces/rick-api.interface';

export const CharacterCard = ({
  character,
  setOpen,
}: {
  character: Character;
  setOpen: (open: boolean) => void;
}) => {
  const { handleDelete, handleOpen } = useCardHook({ setOpen });
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
          onClick={() => handleOpen(character)}
        />
        <CardContent>
          <Typography variant="h6">{character.name}...</Typography>
          <Typography variant="body2">
            <Typography variant="caption" sx={{ display: 'block' }}>
              Status: {character.status}
            </Typography>
            <Typography variant="caption" sx={{ display: 'block' }}>
              Species: {character.species}.
            </Typography>
            <Typography variant="caption">Gender: {character.gender}</Typography>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            color="error"
            size="small"
            variant="contained"
            onClick={() => handleDelete(character)}
          >
            <Delete />
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
};
