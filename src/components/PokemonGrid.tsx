import type { PokemonListItem } from "../types";
import PokemonCard from "./PokemonCard";
import idFromUrl from "./lib/pokemon";

export default function PokemonGrid(props: { list: PokemonListItem[] }) {
  return (
    <ul>
      <h3>Pokemon:</h3>
      {props.list.map((pokemon) => (
        <PokemonCard
          name={pokemon.name}
          key={idFromUrl(pokemon.url)}
          id={idFromUrl(pokemon.url)}
        />
      ))}
    </ul>
  );
}
