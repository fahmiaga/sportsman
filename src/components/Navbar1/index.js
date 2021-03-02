import React, { useState, useEffect } from "react";
import logo from "../../assets/img/logo/orange.png";
import { useHistory } from "react-router-dom";
import Headroom from "react-headroom";
import _ from "lodash";
import jwt_decode from "jwt-decode";

const Navbar = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const history = useHistory();

  const page = window.location.pathname.substring(1);
  console.log(page);

  const handleHome = () => {
    history.push("/");
  };

  const handleSignIn = () => {
    history.push("/login");
  };

  const handleFeature = () => {
    history.push("/feature");
  };

  const handleAbout = () => {
    history.push("/about");
  };

  const handleContactUs = () => {
    history.push("/contactus");
  };

  const handleProfile = () => {
    history.push("/profile");
    window.location.reload(true);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    history.push("/");
    window.location.reload(true);
  };
  const token = localStorage.getItem("token");

  let decoded;
  if (token && !_.isEmpty(token)) decoded = jwt_decode(token);

  return (
    <Headroom>
      <header className={`header ${scrollY > 230 ? "layout--orange" : ""}`}>
        <img src={logo} onClick={handleHome} alt="" className="layout__img" />
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li onClick={handleFeature}>Feature</li>
          <li onClick={handleAbout}>About</li>
          <li onClick={handleContactUs}>Contact Us</li>
          {token ? (
            <div>
              <li onClick={handleProfile} className="menu-item">
                Welcome {decoded.name}!
              </li>
              <li onClick={handleSignOut} className="border-li">
                Sign Out
              </li>
            </div>
          ) : (
            // <div>
            // 	<p className='layout__button'>Welcome {decoded.name}!</p>
            // </div>
            <button onClick={handleSignIn} className="layout__button">
              Login
            </button>
          )}
        </ul>
      </header>
    </Headroom>
  );
};

export default Navbar;
