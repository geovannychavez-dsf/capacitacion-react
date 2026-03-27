import { Container } from '@mui/material';

import { InputCharacter, ListCharacter } from './components';
import { useSearchCharacters } from './hooks';
import { useFetchApicharcter } from './hooks/useFetchApicharcter';
import { containerCharacterStyle } from './styles/contaniner';
import { AlertsMessage, ProgressItem } from '../../components';
const CharacterListPage = () => {
  const {
    characters: charactersApi,
    error: errorApi,
    isLoading: isLoadingApi,
  } = useFetchApicharcter();

  const { searchTerm, setSearchTerm, filteredCharacters } = useSearchCharacters(
    charactersApi ?? [],
  );

  return (
    <Container style={containerCharacterStyle}>
      {errorApi && <AlertsMessage severity="error" message={errorApi.message} />}
      <ProgressItem loading={isLoadingApi} />
      <InputCharacter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <ListCharacter characters={filteredCharacters} />
    </Container>
  );
};
export default CharacterListPage;
