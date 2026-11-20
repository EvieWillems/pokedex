import { useParams } from "react-router";
import SinglePokemon from "../components/SinglePokemon";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function SinglePokemonPage() {
  const { pokemonId } = useParams();
  const pokeId = Number(pokemonId);
  console.log(useContext(UserContext)?.userState.status)
  return <SinglePokemon id={pokeId} />;
}

// const book = books.find((b) => b.id === Number(bookId))
