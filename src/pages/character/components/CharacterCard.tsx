import { Delete } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import * as motion from 'motion/react-client';
import { toast } from 'sonner';

import { CHARACTER_QUERY_ID, DURATION } from '../constants/character-constants';
import { useCharacterCrud } from '../hooks/useCharacterCrud';
import { Character } from '../interfaces/rick-api.interface';

export const CharacterCard = ({
  character,
  setOpen,
}: {
  character: Character;
  setOpen: (open: boolean) => void;
}) => {
  const { deleteCharacter } = useCharacterCrud();
  const queryClient = useQueryClient();
  const handleDelete = (character: Character) => {
    toast.info('Eliminar personaje', {
      description: 'Desea eliminar el personaje ' + character.name,
      position: 'top-center',
      icon: <Delete sx={{ color: 'red' }} />,
      action: {
        label: 'Eliminar',
        onClick: () => {
          deleteCharacter.mutate(character.id);
        },
      },
      closeButton: true,
      duration: DURATION,
    });
  };
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
          onClick={() => {
            queryClient.setQueryData([CHARACTER_QUERY_ID], character);
            setOpen(true);
          }}
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
