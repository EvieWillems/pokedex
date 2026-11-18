import { NavLink } from "react-router";

function Header() {
  return (
    <header>
      <h1>Welcome to the world of Pokemon!!!</h1>
      <p> Gotta chach them all!!!!</p>
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
        to="/pokedex"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        <p>Pokedex</p>
      </NavLink>
    </header>
  );
}

export default Header;
