import { Button, Container, Grid } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DialogCreateUpdate, InputCharacter, ListCharacter } from './components';
import { CHARACTER_QUERY_ID } from './constants/character-constants';
import { useSearchCharacters } from './hooks';
import { useFetchApicharcter } from './hooks/useFetchApicharcter';
import { containerCharacterStyle } from './styles/contaniner';
import { AlertsMessage, ProgressItem } from '../../components';
import { TOKEN } from '../auth/constants/auth-constants';

const CharacterListPage = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    characters: charactersApi,
    error: errorApi,
    isLoading: isLoadingApi,
  } = useFetchApicharcter();

  const { searchTerm, setSearchTerm, filteredCharacters } = useSearchCharacters(
    charactersApi ?? [],
  );

  const [open, setOpen] = useState(false);

  function closeSesion() {
    navigate('/login');
    sessionStorage.removeItem(TOKEN);
  }

  return (
    <Container style={containerCharacterStyle}>
      <Grid container spacing={2} sx={{ mt: 5 }}>
        <Button
          variant="contained"
          onClick={() => {
            queryClient.setQueryData([CHARACTER_QUERY_ID], { id: 0 });
            setOpen(true);
          }}
        >
          Agregar Personaje
        </Button>
        <Button variant="contained" onClick={closeSesion}>
          Salir
        </Button>
      </Grid>
      <DialogCreateUpdate open={open} setOpen={setOpen} />
      {errorApi && <AlertsMessage severity="error" message={errorApi.message} />}
      <ProgressItem loading={isLoadingApi} />
      <InputCharacter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ListCharacter characters={filteredCharacters} setOpen={setOpen} />
    </Container>
  );
};
export default CharacterListPage;
