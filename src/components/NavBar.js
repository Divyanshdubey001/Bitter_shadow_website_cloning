// import { NavLink } from "react-router-dom";
// import "../styles/navbar.css";
// import { useState } from "react";

// const NavBar = () => {
//   const [burger_class, setBurger_class] = useState("burger-bar unclicked");
//   const [menu_class, setMenu_class] = useState("menu hidden");
//   const [isMenuClicked, setIsMenuClicked] = useState(false);

//   const updateMenu = () => {
//     if (!isMenuClicked) {
//       setBurger_class("burger-bar clicked");
//       setMenu_class("menu visible");
//     } else {
//       setBurger_class("burger-bar unclicked");
//       setMenu_class("menu hidden");
//     }
//     setIsMenuClicked(!isMenuClicked);
//   };

//   return (
//     <>
//       <div>
//         <nav className="nav_burger_menu">
//           <div className="burger-menu" onClick={updateMenu}></div>
//           <div className="burger_class"></div>
//           <div className="burger_class"></div>
//           <div className="burger_class"></div>
//         </nav>
//       </div>

//         <div className="navbar-wrapper">
//         <div className="menu_class">
//           <nav>
//             <ul>
//               <li>
//                 <NavLink to="/photos">Photos</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/vidoes">Vidoes</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/about">About</NavLink>
//               </li>
//               <li>
//                 <NavLink to="/contact">Contact</NavLink>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NavBar;

import "../styles/navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div style={{ width: "100%", height: "10vh" }}>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
        <div className={menu_class}>
          <nav>
            <ul>
              <li>
                <a href="/photos">Photos</a>
              </li>
              <li>
                <a href="/vidoes">Vidoes</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
