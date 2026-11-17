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

export default function Pokedex() {
  // const [pokemonArray, setPokemonArray] = useState<PokemonListItem[]>([]);
  const [pokedexState, setPokedexState] = useState<PokedexState>({
    status: "loading",
  });
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
        // setPokemonArray(data.results);
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
  }, []);

  if (pokedexState.status === "error") {
    return <h3>{pokedexState.message}</h3>;
  }
  if (pokedexState.status === "loading") {
    return <h3>"loading Pokemon...</h3>;
  }
  if (pokedexState.pokedexResult.length === 0) {
    return <h3>No Pokemon Found</h3>;
  }

  return (
    <section>
      <PokemonGrid list={pokedexState.pokedexResult} />
      <ResultCount pokemonList={pokedexState.pokedexResult} />
    </section>
  );
}
