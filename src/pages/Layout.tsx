import { NavLink, Outlet } from "react-router";
import Header from "../components/Header";

export default function Layout () {
    return (
        <>
        <Header/>
        <NavLink
            to="/"
            className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
            }
            end>
            <p>HomePage</p>
        </NavLink>

        <NavLink
            to="/favourite"
            className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
            }
            end>
            <p>Favourite Pokemon</p>
        </NavLink>

        <NavLink
            to="/pokedex"
            className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
            }>
        
            <p>Pokedex</p>
        </NavLink>
        
        <main>
            <Outlet/>
        </main>
      </>
    )
}