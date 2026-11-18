import PokemonCard from "./PokemonCard";
import usePokemon from "../hooks/usePokemon";

export default function SinglePokemon(props: { id: number }) {
  const id = props.id;
  const result = usePokemon(id);

  if (result.status === "success") {
    const { types, height, weight } = result.pokemonResult;

    return (
      <>
        <PokemonCard id={id} name={result.pokemonResult.name} />
        <ul>
          Types
          {types.map((typeinfo) => (
            <li>{typeinfo.type.name}</li>
          ))}
        </ul>
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>
      </>
    );
  } //else {console.log(result.status)}
}
