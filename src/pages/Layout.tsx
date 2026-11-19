import { NavLink, Outlet } from "react-router";
import Header from "../components/Header";
import { useTheme } from "../hooks/useTheme";

export default function Layout() {
  const { theme } = useTheme();
  return (
    <div data-theme={theme}>
      <Header />
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        end
      >
        <p>HomePage</p>
      </NavLink>

      <NavLink
        to="/team"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        end
      >
        <p>Favourite Pokemon</p>
      </NavLink>

      <NavLink
        to="/pokedex"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        <p>Pokedex</p>
      </NavLink>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
