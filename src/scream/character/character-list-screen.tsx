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
      <input
        style={{
          padding: "10px",
          width: "300px",
          fontSize: "16px",
        }}
        type="text"
        placeholder="Buscar nombre de personaje..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div  style={{
        display: "flex",
        gap: "10px",
      }}>
        <button
          disabled={isLoading}
          className="counter"
          onClick={decrementPage}
        > Prev Page</button>
        <p>{page}</p>
        <button
          disabled={loading}
          className="counter"
          onClick={incrementPage}
        >
          Next Page
        </button>
      </div>

      <ListCharacter>
        {filteredCharacters.map((character) => (
          <ItemCharacter key={character.id} {...character} />
        ))}
      </ListCharacter>
    </div>
  );
};
