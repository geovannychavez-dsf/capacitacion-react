import { Close } from '@mui/icons-material';
import {
  CardMedia,
  CircularProgress,
  FormControl,
  Input,
  InputLabel,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
} from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

import { CHARACTER_QUERY_ID } from '../constants/character-constants';
import { useCharacterCrud } from '../hooks/useCharacterCrud';
import { useValiateCharacter } from '../hooks/useValiateCharacter';
import { Character } from '../interfaces/rick-api.interface';

interface DialogCreateUpdateProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}
export const DialogCreateUpdate = ({ open, setOpen }: Readonly<DialogCreateUpdateProps>) => {
  const queryClient = useQueryClient();
  const handleClose = () => {
    setOpen(false);
  };
  const { register, watch, handleSubmit, errors, reset } = useValiateCharacter();
  const { createCharacter, updateCharacter } = useCharacterCrud();
  const inicialValue = queryClient.getQueryData<Character>([CHARACTER_QUERY_ID]) as Character;
  const handelFormSubmit = async (character: Omit<Character, 'id'>) => {
    if (inicialValue.id === 0) {
      await createCharacter.mutateAsync({ ...character, id: 0 });
    } else {
      await updateCharacter.mutateAsync({ ...character, id: inicialValue.id });
    }
    reset();
    setOpen(false);
  };
  useEffect(() => {
    reset(inicialValue);
  }, [open, inicialValue, reset]);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
            <Close />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DialogTitle id="alert-dialog-title">
        {inicialValue?.id === 0 ? 'Crear Character' : 'Actualizar Character'}
      </DialogTitle>
      <DialogContent>
        <CardMedia
          sx={{ height: 150, width: '100%' }}
          height={150}
          width={'100%'}
          component="img"
          image={watch('image') || 'https://placehold.co/300x200'}
          alt={'character'}
        />
        <form onSubmit={handleSubmit(handelFormSubmit)}>
          <Grid container spacing={2}>
            <Grid>
              <FormControl sx={{ m: 1, width: '100%' }}>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input {...register('name')} id="name" aria-describedby="name-text" />
              </FormControl>
              {errors.name && (
                <Typography variant="body1" color="error">
                  {errors.name.message}
                </Typography>
              )}
            </Grid>
            <Grid>
              <FormControl sx={{ m: 1, width: '100%' }}>
                <InputLabel htmlFor="status">Status</InputLabel>
                <Input {...register('status')} id="status" aria-describedby="status-text" />
              </FormControl>
              {errors.status && (
                <Typography variant="body1" color="error">
                  {errors.status.message}
                </Typography>
              )}
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid>
              <FormControl sx={{ m: 1, width: '100%' }}>
                <InputLabel htmlFor="species">Species</InputLabel>
                <Input {...register('species')} id="species" aria-describedby="species-text" />
              </FormControl>
              {errors.species && (
                <Typography variant="body1" color="error">
                  {errors.species.message}
                </Typography>
              )}
            </Grid>
            <Grid>
              <FormControl sx={{ m: 1, width: '100%' }}>
                <InputLabel htmlFor="type">Type</InputLabel>
                <Input {...register('type')} id="type" aria-describedby="type-text" />
              </FormControl>
              {errors.type && (
                <Typography variant="body1" color="error">
                  {errors.type.message}
                </Typography>
              )}
            </Grid>
          </Grid>
          <Grid container>
            <FormControl sx={{ m: 1, width: '100%' }}>
              <InputLabel htmlFor="gender">Gender</InputLabel>
              <Input {...register('gender')} id="gender" aria-describedby="gender-text" />
            </FormControl>
            {errors.gender && (
              <Typography variant="body1" color="error">
                {errors.gender.message}
              </Typography>
            )}
            <FormControl sx={{ m: 1, width: '100%' }}>
              <InputLabel htmlFor="image">Image</InputLabel>
              <Input {...register('image')} id="image" aria-describedby="image-text" />
            </FormControl>
            {errors.image && (
              <Typography variant="body1" color="error">
                {errors.image.message}
              </Typography>
            )}
          </Grid>
          <FormControl sx={{ m: 1, width: '100%' }}>
            <Button
              type="submit"
              variant="contained"
              disabled={createCharacter.isPending || updateCharacter.isPending}
            >
              {inicialValue?.id === 0 ? 'Crear' : 'Actualizar'}
              {(createCharacter.isPending || updateCharacter.isPending) && (
                <CircularProgress size={20} />
              )}
            </Button>
          </FormControl>
        </form>
      </DialogContent>
    </Dialog>
  );
};
