import { useMemo, useRef, useState } from "react";
import { ICharacter } from "../interfaces/rick-and-morty-interface";

export const useSearchCharacters = (characters: ICharacter[]) => {
   const [searchTerm, setSearchTerm] = useState<string>("");

   const filteredCharacters = useMemo(() => {
    console.log("useSearchCharacters: useMemo ejecutado");
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