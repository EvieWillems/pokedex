import { Routes, Route } from "react-router";
import HomePage from "./pages/Homepage";
import PokedexPage from "./pages/PokedexPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./pages/Layout";
import SinglePokemonPage from "./pages/SinglePokemonPage";
import TeamPage from "./pages/TeamPage";
// VITE_API_URL=https://pokeapi.co/api/v2
// VITE_TEAM_API_URL=https://pokemon-team-api-xlvv.onrender.com
// VITE_TEAM_USER_ID=4
const first20url = import.meta.env.VITE_API_URL+"/pokemon?limit=20"
const teamurl = import.meta.env.VITE_TEAM_API_URL
const userTeam = import.meta.env.VITE_TEAM_USER_ID

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="pokedex" element={<PokedexPage url={first20url}/>} />
        <Route path="team" element={<TeamPage url={teamurl+"/public/users/"+userTeam+"/team"} />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="pokedex/:pokemonId" element={<SinglePokemonPage />} />
      </Route>
    </Routes>
  );
}
