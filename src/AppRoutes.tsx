import { Routes, Route } from "react-router";
import HomePage from "./pages/Homepage";
import PokedexPage from "./pages/PokedexPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="pokedex" element={<PokedexPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
