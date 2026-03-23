import { ButtonCountCharter } from "../../components/button-count";
import { InputCharacter } from "./components/input-charactes";
import { ListCharacter } from "./components/list-characters";
import { useFetchCharacters } from "./hooks/use-fetch-characters";
import { useSearchCharacters } from "./hooks/use-search-characters";
import { Container } from "@mui/material";
import AlertsMessage from "../../components/alert-meesage";
import { ProgressItem } from "../../components/progress";
import { containerCharacterStyle } from "./styles/contaniner";
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
