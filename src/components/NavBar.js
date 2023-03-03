import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
const NavBar = () => {
  return (
    <>
      <div className="navbar-container">Catalog-Z</div>
      <div className="navbar-wrapper">
        <nav>
          <ul>
            <li>
              <NavLink to="/photos">Photos</NavLink>
            </li>
            <li>
              <NavLink to="/vidoes">Vidoes</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
