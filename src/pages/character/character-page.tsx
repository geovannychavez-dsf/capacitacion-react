import { Box, Chip, Container, Stack, Typography } from '@mui/material';

import { ButtonCountCharter, InputCharacter, ListCharacter } from './components';
import { INICIO_PAGE_CHARACTER } from './constants/character-constants';
import { useFetchCharacters, useSearchCharacters } from './hooks';
import { AlertMeesage, ProgressItem } from '../../components';

const CharacterListPage = () => {
  const { characters, loading, setPage, page, error } = useFetchCharacters();
  const { searchTerm, setSearchTerm, filteredCharacters } = useSearchCharacters(characters);
  const isLoading = loading && page === INICIO_PAGE_CHARACTER;
  const incrementPage = () => setPage((currentPage: number) => currentPage + INICIO_PAGE_CHARACTER);
  const decrementPage = () => setPage((currentPage: number) => currentPage - INICIO_PAGE_CHARACTER);

  return (
    <Box className="page-shell" sx={{ py: { xs: 3, md: 6 } }}>
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Stack spacing={1} sx={{ textAlign: { xs: 'left', md: 'center' } }}>
            <Typography variant="h4">Rick and Morty Directory</Typography>
            <Typography variant="subtitle1">
              Explora personajes por nombre, revisa su estado y navega por todas las paginas.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'center' } }}>
              <Chip
                label={`${filteredCharacters.length} resultados en pagina ${page}`}
                color="primary"
                variant="outlined"
              />
            </Box>
          </Stack>
          {error && <AlertMeesage severity="error" message={error} />}
          <ProgressItem loading={loading} />
          <InputCharacter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <ButtonCountCharter
            isLoading={isLoading}
            page={page}
            incrementPage={incrementPage}
            decrementPage={decrementPage}
          />
          <ListCharacter characters={filteredCharacters} />
        </Stack>
      </Container>
    </Box>
  );
};

export default CharacterListPage;
