import { type PokemonListItem } from "../types";
import { useEffect, useState } from "react";
import {getPokemonList} from "../api/pokemon"


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
    let ignore = false
    const loadPokemon = async () => {
      try {
        const response = await getPokemonList({url:"/pokemon?limit=20"})
        
        if (!ignore) {setPokedexState({ status: "success", pokedexResult: response.results })};
      } catch (err) {
        if (!ignore) {err instanceof Error && console.log("error:" + err.message);
        setPokedexState({
          status: "error",
          message: "unable to catch any Pokemon",
        })};
      }
    };

    loadPokemon();

    return (() => {
      ignore = true;
    });
  }, [reloadCount]);

  const refetch = () => setReloadCount((count) => count + 1);

  return { pokedexState, refetch };
}
