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

export default function Pokedex() {
  const [pokemonArray, setPokemonArray] = useState<PokemonListItem[]>([]);
  useEffect(() => {
    const loadPokemon = async () => {
      fetch(`${import.meta.env.VITE_API_URL}/pokemon?limit=20`)
        .then((res) => res.json())
        .then((data) => setPokemonArray(data.results));
    };
    loadPokemon();
  }, []);

  return (
    <section>
      <PokemonGrid list={pokemonArray} />
      <ResultCount pokemonList={pokemonArray} />
    </section>
  );
}
