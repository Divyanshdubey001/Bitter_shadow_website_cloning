import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState("false");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-bar-logo">Catalog-Z</div>
        <div className={`nav-bar-menu ${showMenu ? "show" : ""}`}>
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
        </div>
        <div className="nav-bar-hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
