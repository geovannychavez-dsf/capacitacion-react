import { ButtonCountCharter } from "../../components/button-count";
import { InputCharacter } from "./components/input-charactes";
import { CharacterCard } from "./components/card-characters";
import { ListCharacter } from "./components/list-characters";
import { useFetchCharacters } from "./hooks/use-fetch-characters";
import { useSearchCharacters } from "./hooks/use-search-characters";
import { Container } from "@mui/material";
import AlertsMessage from "../../Components/alert-meesage";
import { ProgressItem } from "../../Components/progress";
export const CharacterListScreen = () => {
  const { characters, loading, setPage, page, error } = useFetchCharacters();
  const { searchTerm, setSearchTerm, filteredCharacters } = useSearchCharacters(
    characters.results,
  );
  const isLoading = loading && page === 1;
  const incrementPage = () => setPage((page) => page + 1);
  const decrementPage = () => setPage((page) => page - 1);

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {error && <AlertsMessage severity="error" message={error} />}
      <ProgressItem loading={loading} />
      <InputCharacter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ButtonCountCharter
        isLoading={isLoading}
        page={page}
        incrementPage={incrementPage}
        decrementPage={decrementPage}
      />
      <ListCharacter>
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} {...character} />
        ))}
      </ListCharacter>
    </Container>
  );
};
