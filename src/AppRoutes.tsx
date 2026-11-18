import {Routes, Route} from "react-router"
import HomePage from "./pages/Homepage"
import PokedexPage from "./pages/PokedexPage"

export default function AppRoutes () {
    return (
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="pokedex" element={<PokedexPage />} />
            </Routes>
            );
}