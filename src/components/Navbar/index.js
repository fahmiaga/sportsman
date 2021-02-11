import React from "react";

import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">
        <img src={logo} alt="logo" className="navbar__img" />
      </a>
      <ul className="navbar__list">
        <li>Feature</li>
        <li>About</li>
      </ul>
      <button className="navbar__button">Ready To Sweat?</button>
    </nav>
  );
}

export default Navbar;
