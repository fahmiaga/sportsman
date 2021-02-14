import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import jwt_decode from "jwt-decode";
import _ from "lodash";
import { postSignUp, postSignIn } from "../../redux/Action/userAction";
import logo from "../../assets/Images/Logo.png";
import "../../styles/navbar.css";
import ProfileMenu from "../ModalAuth/index";

export const MODAL_LOGIN = 1;
export const MODAL_SIGNUP = 2;

export default function Layout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [whichModal, setWhichModal] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [userSignIn, setUserSignIn] = useState({
    name: "",
    password: "",
    token: "",
  });

  const firstname = "yoshi";
  const lastname = "dio";

  const { signUp, signIn, jwtToken } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  let decoded;
  if (token && !_.isEmpty(token)) decoded = jwt_decode(token);

  return (
    <>
      <div className="main-container">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <div>
          {decoded ? (
            <ProfileMenu />
          ) : (
            <button
              onClick={() => {
                setIsModalOpen(true);
                setWhichModal(MODAL_SIGNUP);
              }}
              className="navbar-button"
            >
              Sign Up
            </button>
          )}
        </div>
      </div>

      <main>{children}</main>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="modal-container"
        overlayClassName="modal-overlay-center"
        contentLabel="Sign In"
      >
        {renderWhichModal()}
      </Modal>
    </>
  );

  function renderWhichModal() {
    const handleLogin = (event) => {
      event.preventDefault();
      setIsModalOpen(false);
    };

    const handleChange = (event) => {
      setUserData({
        ...userData,
        [event.target.name]: event.target.value,
      });
    };

    const handleSignIn = (event) => {
      setUserSignIn({
        ...userSignIn,
        [event.target.name]: event.target.value,
      });
    };

    const submitSignUp = (event) => {
      event.preventDefault();
      const body = {
        username: userData.name,
        email: userData.email,
        password: userData.password,
        first_name: firstname,
        last_name: lastname,
      };
      dispatch(postSignUp(body));
      setWhichModal(MODAL_LOGIN);
    };

    const sumbitSignIn = (event) => {
      event.preventDefault();
      const body = {
        username: userSignIn.name,
        password: userSignIn.password,
      };
      dispatch(postSignIn(body));
      setIsModalOpen(false);
    };

    switch (whichModal) {
      case MODAL_SIGNUP:
        return (
          <div className="home-signup">
            <div className="title-wrap">
              <img className="logo-signup" src={logo} alt="logo" />
            </div>
            <form onSubmit={handleLogin} className="home-login-form">
              <div>Full Name</div>
              <input
                className="form-input"
                type="text"
                placeholder="Full Name"
                name="name"
                onChange={(event) => handleChange(event)}
              />
              <div>Email</div>
              <input
                className="form-input"
                type="email"
                placeholder="Email"
                name="email"
                onChange={(event) => handleChange(event)}
              />
              <div>Password</div>
              <input
                className="form-input"
                type="password"
                placeholder="Password"
                name="password"
                onChange={(event) => handleChange(event)}
              />
              <button
                onClick={submitSignUp}
                type="submit"
                className="home-login-button"
              >
                Sign Up
              </button>
              <div className="redirect">
                Already have an account?
                <span onClick={() => setWhichModal(MODAL_LOGIN)}>Log In</span>
              </div>
            </form>
          </div>
        );
      case MODAL_LOGIN:
        return (
          <div className="home-signup">
            <h1>SIGN IN</h1>
            <form onSubmit={handleLogin} className="home-login-form">
              <div>username</div>
              <input
                className="form-input"
                type="text"
                placeholder="username"
                name="name"
                onChange={(event) => handleSignIn(event)}
              />
              <div>Password</div>
              <input
                className="form-input"
                type="password"
                placeholder="Password"
                name="password"
                onChange={(event) => handleSignIn(event)}
              />
              <button
                onClick={sumbitSignIn}
                type="submit"
                className="home-login-button"
              >
                Sign In
              </button>
              <div className="redirect">
                <span onClick={() => setWhichModal(MODAL_SIGNUP)}>
                  Create an account
                </span>
              </div>
            </form>
          </div>
        );
      default:
        break;
    }
  }
}
import React, { useState, useEffect } from "react";

import logo from "../../assets/logo.png";

function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setScrollY(window.setScrollY);
  };

  return (
    <nav className={`layout ${scrollY > 20 ? "layout--white" : ""}`}>
      <div className="layout__logo">
        <a href="/">
          <img src={logo} alt="logo" className="layout__img" />
        </a>

        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label htmlFor="menu-btn" className="menu-icon">
          <span className="menu-icon__line"></span>
        </label>
        <ul className="layout__list">
          <li>
            <a href="feature">Feature</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
        </ul>
      </div>
      <button className="layout__button">Ready To Sweat?</button>
    </nav>
  );
}

export default Navbar;
