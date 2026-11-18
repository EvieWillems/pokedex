import { useEffect, useState } from "react";
import { getPokemon } from "../api/pokemon";
import type { Pokemon } from "../types";

type PokemonState =
    | { status: "loading" }
    | { status: "error"; message: string }
    | { status: "success"; pokemonResult: Pokemon };


export default function usePokemon (id:number) {
    const [pokemonState, setPokemonState] = useState<PokemonState>({status:"loading"})

    useEffect(() => {
        const loadPokemon = async () => {

            try {
                const response = await getPokemon(id)
                setPokemonState({status:"success",pokemonResult:response})
            } catch (err) {
                if (err instanceof Error) {
                    console.log("error: "+err.message)
                }
                setPokemonState({
                    status: "error",
                    message: "could not find requested Pokemon"
                })
            }
        }
        loadPokemon()
    }, [])
    return pokemonState

    
}