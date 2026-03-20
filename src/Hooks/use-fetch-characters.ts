import { useEffect, useState } from "react";
import { rickAndMortyService } from "../services/rick-morty-service";
import { IRickAndMortyResponse } from "../interfaces/rick-and-morty-interface";

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
     */
    const fetchCharacters = async ({ page = 1 }: { page: number }): Promise<void> => {
        setError(null);
        setLoading(true);
        try {
            const response = await rickAndMortyService.getCharacters(page);
            setCharacters(response);
            setLoading(false);
        } catch (err) {
            console.error("Error fetching characters:", err);
            setError((err as Error).message);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };
    /**
     * useEfect se ejecuta cada que se monta el comonente 
     * o cada que se actualiza el estado de page 
     */
    useEffect(() => {
        console.log("useFetchCharacters: useEffect ejecutado");
        fetchCharacters({ page });
    }, [page]);

    return { characters, loading, error, setPage ,page};
}
