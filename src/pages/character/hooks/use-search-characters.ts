import { useMemo, useState } from "react";
import type { ICharacter } from "../interfaces/rick-and-morty-interface";

export const useSearchCharacters = (characters: ICharacter[]) => {
   const [searchTerm, setSearchTerm] = useState<string>("");

   const filteredCharacters = useMemo(() => {
    return characters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
   }, [searchTerm, characters]);

  return {
    searchTerm,
    setSearchTerm,
    filteredCharacters,
  }
}   