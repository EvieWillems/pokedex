import { Routes, Route } from "react-router";
import HomePage from "./pages/Homepage";
import PokedexPage from "./pages/PokedexPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./pages/Layout";
import SinglePokemon from "./components/SinglePokemon";
import SinglePokemonPage from "./pages/SinglePokemonPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="pokedex" element={<PokedexPage />} />
        <Route path="favourite" element={<SinglePokemon id={134} />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="pokedex/:pokemonId" element={<SinglePokemonPage />} />
      </Route>
    </Routes>
  );
}
