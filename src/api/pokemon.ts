//import.meta.env.VITE_API_URL
import type { Pokemon, PokemonResults, TeamList} from "../types"
import {apiGet, apiGetAuth} from "./client"


export interface PokemonQuery {
  url: string;
}

export const getPokemonList = (
  query: PokemonQuery
): Promise<PokemonResults|TeamList> => {console.log(query.url); return apiGetAuth<PokemonResults|TeamList>(query.url);}




export const getPokemon = (
  nameOrId: string | number): Promise<Pokemon> => {
  return apiGet(import.meta.env.VITE_API_URL+"/pokemon/"+nameOrId)
};