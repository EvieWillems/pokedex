import PokemonGrid from "./PokemonGrid";
import ResultCount from "./ResultCount";
import { usePokemonList } from "../hooks/usePokemonList";

export default function Pokedex() {
  const { pokedexState, refetch } = usePokemonList();

  if (pokedexState.status === "error") {
    return (
      <>
        <h3>{pokedexState.message}</h3>
        <button onClick={refetch}>Try Again</button>
      </>
    );
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
