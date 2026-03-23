import { useEffect, useState } from "react";
import { rickAndMortyService } from "../services/character-service";
import { IRickAndMortyResponse } from "../interfaces/rick-and-morty-interface";
import { ApiError } from "../core/error/api-error";

export const useFetchCharacters = () => {
    const [page, setPage] = useState<number>(1);
    const [characters, setCharacters] = useState<IRickAndMortyResponse>({
        info: {
            count: 0,
            pages: 0,
            next: null,
            prev: null
        },
        results: []
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    /**
     * Consume el servicio para obtener los personajes de Rick and Morty, actualiza el estado de characters, loading y error según corresponda.
     * @param page entero que representa la página a consultar, por defecto es 1
     * @returns promesa que resuelve void
     */
    const fetchCharacters = async ({ page = 1 }: { page: number }): Promise<void> => {
        setError(null);
        setLoading(true);
        try {
            const response = await rickAndMortyService.getCharacters(page);
            setCharacters(response);
            setLoading(false);
        } catch (erro) {
            if (erro instanceof ApiError) {
                setError(erro.message);
            } else {
                setError("Error inesperado");
            }
        } finally {
            setLoading(false);
        }
    };
    /**
     * useEfect se ejecuta cada que se monta el componente 
     * o cada que se actualiza el estado de page 
     */
    useEffect(() => {
        console.log("useFetchCharacters: useEffect ejecutado");
        fetchCharacters({ page });
    }, [page]);

    return { characters, loading, error, setPage, page };
}
