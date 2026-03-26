import { Container } from '@mui/material';

import { InputCharacter, ListCharacter } from './components';
import { INICIO_PAGE_CHARACTER } from './constants/character-constants';
import { useFetchCharacters, useSearchCharacters } from './hooks';
import { containerCharacterStyle } from './styles/contaniner';
import { AlertsMessage, ButtonCountCharter, ProgressItem } from '../../components';
const CharacterListPage = () => {
  const { characters, loading, setPage, page, error } = useFetchCharacters();

  const { searchTerm, setSearchTerm, filteredCharacters } = useSearchCharacters(characters);
  const isLoading = loading && page === INICIO_PAGE_CHARACTER;
  const incrementPage = () => setPage((page: number) => page + INICIO_PAGE_CHARACTER);
  const decrementPage = () => setPage((page: number) => page - INICIO_PAGE_CHARACTER);

  return (
    <Container style={containerCharacterStyle}>
      {error && <AlertsMessage severity="error" message={error} />}
      <ProgressItem loading={loading} />
      <InputCharacter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ButtonCountCharter
        isLoading={isLoading}
        page={page}
        incrementPage={incrementPage}
        decrementPage={decrementPage}
      />
      <ListCharacter characters={filteredCharacters} />
    </Container>
  );
};
export default CharacterListPage;
