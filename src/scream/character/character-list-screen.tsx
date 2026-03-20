import { ButtonCountCharter } from "../../Components/button-count-characters";
import { InputCharacter } from "../../Components/input-charactes";
import { ItemCharacter } from "../../Components/item-characters";
import { ListCharacter } from "../../Components/list-characters";
import { useFetchCharacters } from "../../Hooks/use-fetch-characters";
import { useSearchCharacters } from "../../Hooks/use-search-characters";

export const CharacterListScreen = () => {
  const { characters, loading, setPage, page, error } = useFetchCharacters();
  const { searchTerm, setSearchTerm, filteredCharacters } = useSearchCharacters(
    characters.results,
  );
  const isLoading = loading && page === 1;
  const incrementPage = () => setPage((page) => page + 1);
  const decrementPage = () => setPage((page) => page - 1);

  return (
    <div
      className="character-list-screen"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h1>Character List</h1>
      {error}
      <InputCharacter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ButtonCountCharter
        isLoading={isLoading}
        page={page}
        incrementPage={incrementPage}
        decrementPage={decrementPage}
      />
      <ListCharacter>
        {filteredCharacters.map((character) => (
          <ItemCharacter key={character.id} {...character} />
        ))}
      </ListCharacter>
    </div>
  );
};
