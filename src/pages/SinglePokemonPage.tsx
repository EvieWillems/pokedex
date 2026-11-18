import { useParams } from "react-router";
import SinglePokemon from "../components/SinglePokemon";

export default function SinglePokemonPage() {
  const { pokemonId } = useParams();
  const pokeId = Number(pokemonId);

  return <SinglePokemon id={pokeId} />;
}

// const book = books.find((b) => b.id === Number(bookId))
