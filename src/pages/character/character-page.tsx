import { Container } from "@mui/material";
import { containerCharacterStyle } from "./styles/contaniner";
import { InputCharacter, ListCharacter } from "./components";
import {
  AlertsMessage,
  ButtonCountCharter,
  ProgressItem,
} from "../../components";
import { useFetchCharacters, useSearchCharacters } from "./hooks";
export const CharacterListScreen = () => {
  const { characters, loading, setPage, page, error } = useFetchCharacters();
  const { searchTerm, setSearchTerm, filteredCharacters } = useSearchCharacters(
    characters.results,
  );
  const isLoading = loading && page === 1;
  const incrementPage = () => setPage((page) => page + 1);
  const decrementPage = () => setPage((page) => page - 1);
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
