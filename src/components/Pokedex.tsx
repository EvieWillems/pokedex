import { useEffect, useState } from "react";
import PokemonGrid from "./PokemonGrid";
import ResultCount from "./ResultCount";
import { type PokemonListItem } from "../types";

// const pokemonArray = [
//     {
//         name:"bulbasaur",
//         id:1
//     },
//     {
//         name:"charmander",
//         id:4
//     },
//     {
//         name:"squirtle",
//         id:7
//     }
// ]

interface PokemonResults { count: number; next: string | null; previous: string | null; results: PokemonListItem[] }

export default function Pokedex() {
  const [pokemonArray, setPokemonArray] = useState<PokemonListItem[]>([]);
  useEffect(() => {
    const loadPokemon = async () => {
        try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/pokemon?limit=20`)
        
        if (!response.ok) {
            throw new Error("could not load pokemon");            
        }
        const data: PokemonResults = await response.json()
        setPokemonArray(data.results)
    } catch (err) {
        err instanceof Error&& console.log("error:"+err.message);
    }}
    
    loadPokemon();
  }, []);

  return (
    <section>
      <PokemonGrid list={pokemonArray} />
      <ResultCount pokemonList={pokemonArray} />
    </section>
  );
}
