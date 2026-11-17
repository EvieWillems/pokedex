import { type PokemonListItem } from "../types";
import { useEffect, useState } from "react";

interface PokemonResults {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

type PokedexState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; pokedexResult: PokemonListItem[] };

export function usePokemonList() {
  const [pokedexState, setPokedexState] = useState<PokedexState>({
    status: "loading",
  });
  const [reloadCount, setReloadCount] = useState(0);
  useEffect(() => {
    const loadPokemon = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/pokemon?limit=20`,
        );

        if (!response.ok) {
          throw new Error("could not load pokemon");
        }

        const data: PokemonResults = await response.json();
        setPokedexState({ status: "success", pokedexResult: data.results });
      } catch (err) {
        err instanceof Error && console.log("error:" + err.message);
        setPokedexState({
          status: "error",
          message: "unable to catch any Pokemon",
        });
      }
    };

    loadPokemon();
  }, [reloadCount]);

  const refetch = () => setReloadCount((count) => count + 1);

  return { pokedexState, refetch };
}
