import { ButtonCountCharter } from "../Components/button-count-characters";
import { InputCharacter } from "../Components/input-charactes";
import { CharacterCard } from "../Components/card-characters";
import { ListCharacter } from "../Components/list-characters";
import { useFetchCharacters } from "../Hooks/use-fetch-characters";
import { useSearchCharacters } from "../Hooks/use-search-characters";
import { Container } from "@mui/material";
import AlertsMessage from "../Components/alert-meesage";
import { ProgressItem } from "../Components/progress";
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
