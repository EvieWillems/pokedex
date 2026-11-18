//import.meta.env.VITE_API_URL
import type { PokemonListItem, Pokemon, PokemonResults} from "../types"
import {apiGet} from "./client"


export interface PokemonQuery {
  url: string;
}

export const getPokemonList = (
  query: PokemonQuery,
  signal?: AbortSignal,
): Promise<PokemonResults> => apiGet<PokemonResults>(import.meta.env.VITE_API_URL+query.url);




export const getPokemon = (
  nameOrId: string | number,
  signal?: AbortSignal,
): Promise<Pokemon> => {
  return apiGet(import.meta.env.VITE_API_URL+nameOrId)
};