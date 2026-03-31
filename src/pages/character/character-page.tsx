import { Button, Container, Grid } from '@mui/material';

import { DialogCreateUpdate, InputCharacter, ListCharacter } from './components';
import { useSearchCharacters } from './hooks';
import { containerCharacterStyle } from './styles/contaniner';
import { AlertsMessage, ProgressItem } from '../../components';

const CharacterListPage = () => {
  const {
    searchTerm,
    setSearchTerm,
    filteredCharacters,
    error,
    isLoading,
    open,
    setOpen,
    closeSesion,
    handleOpen,
  } = useSearchCharacters();

  return (
    <Container style={containerCharacterStyle}>
      <Grid container spacing={2} sx={{ mt: 5 }}>
        <Button variant="contained" onClick={handleOpen}>
          Agregar Personaje
        </Button>
        <Button variant="contained" onClick={closeSesion}>
          Salir
        </Button>
      </Grid>
      <DialogCreateUpdate open={open} setOpen={setOpen} />
      {error && <AlertsMessage severity="error" message={error.message} />}
      <ProgressItem loading={isLoading} />
      <InputCharacter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ListCharacter characters={filteredCharacters ?? []} setOpen={setOpen} />
    </Container>
  );
};
export default CharacterListPage;
