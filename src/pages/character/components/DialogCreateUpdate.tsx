import {
  CardMedia,
  CircularProgress,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { useCharacterCrud } from '../hooks/useCharacterCrud';
import { useValiateCharacter } from '../hooks/useValiateCharacter';
import { Character } from '../interfaces/rick-api.interface';

interface DialogCreateUpdateProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  inicialValue: Character;
}
export default function DialogCreateUpdate({
  open,
  setOpen,
  inicialValue,
}: Readonly<DialogCreateUpdateProps>) {
  const handleClose = () => {
    setOpen(false);
  };
  const { register, watch, handleSubmit, errors } = useValiateCharacter();
  const { createCharacter, updateCharacter } = useCharacterCrud();

  const handelFormSubmit = async (value: Omit<Character, 'id'>) => {
    if (inicialValue.id === 0) {
      await createCharacter.mutateAsync({ ...value, id: 0 });
    } else {
      await updateCharacter.mutateAsync({ ...value, id: inicialValue.id });
    }
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {inicialValue?.id === 0 ? 'Crear Character' : 'Actualizar Character'}
      </DialogTitle>
      <DialogContent>
        <CardMedia
          sx={{ height: 180, width: 260 }}
          height={180}
          width={290}
          component="img"
          image={watch('image') || inicialValue.image}
          alt={'character'}
        />
        <form onSubmit={handleSubmit(handelFormSubmit)}>
          <FormControl sx={{ m: 1, width: '90%' }}>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              {...register('name')}
              defaultValue={inicialValue.name}
              id="name"
              aria-describedby="name-text"
            />
          </FormControl>
          {errors.name && (
            <Typography variant="body1" color="error">
              {errors.name.message}
            </Typography>
          )}
          <FormControl sx={{ m: 1, width: '90%' }}>
            <InputLabel htmlFor="status">Status</InputLabel>
            <Input
              {...register('status')}
              defaultValue={inicialValue.status}
              id="status"
              aria-describedby="status-text"
            />
          </FormControl>
          {errors.status && (
            <Typography variant="body1" color="error">
              {errors.status.message}
            </Typography>
          )}
          <FormControl sx={{ m: 1, width: '90%' }}>
            <InputLabel htmlFor="species">Species</InputLabel>
            <Input
              {...register('species')}
              defaultValue={inicialValue.species}
              id="species"
              aria-describedby="species-text"
            />
          </FormControl>
          {errors.species && (
            <Typography variant="body1" color="error">
              {errors.species.message}
            </Typography>
          )}
          <FormControl sx={{ m: 1, width: '90%' }}>
            <InputLabel htmlFor="type">Type</InputLabel>
            <Input
              {...register('type')}
              id="type"
              defaultValue={inicialValue.type}
              aria-describedby="type-text"
            />
          </FormControl>
          {errors.type && (
            <Typography variant="body1" color="error">
              {errors.type.message}
            </Typography>
          )}
          <FormControl sx={{ m: 1, width: '90%' }}>
            <InputLabel htmlFor="gender">Gender</InputLabel>
            <Input
              {...register('gender')}
              id="gender"
              defaultValue={inicialValue.gender}
              aria-describedby="gender-text"
            />
          </FormControl>
          {errors.gender && (
            <Typography variant="body1" color="error">
              {errors.gender.message}
            </Typography>
          )}
          <FormControl sx={{ m: 1, width: '90%' }}>
            <InputLabel htmlFor="image">Image</InputLabel>
            <Input
              {...register('image')}
              defaultValue={inicialValue.image}
              id="image"
              aria-describedby="image-text"
            />
          </FormControl>
          {errors.image && (
            <Typography variant="body1" color="error">
              {errors.image.message}
            </Typography>
          )}
          <FormControl sx={{ m: 1, width: '90%' }}>
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
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
