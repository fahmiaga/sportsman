import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import _ from "lodash";
import { postSignUp, postSignIn } from "../../redux/Action/userAction";
import logo from "../../assets/Images/Logo.png";
import "../../styles/navbar.css";
import MenuUser from "../MenuUser/index";


export const MODAL_SIGNUP = 2;

export default function Layout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [whichModal, setWhichModal] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
  });


  const { signUp } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  return (
    <>
      <div className="main-container">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <div>
            <button
              onClick={() => {
                setIsModalOpen(true);
                setWhichModal(MODAL_SIGNUP);
              }}
              className="navbar-button"
            >
              Sign Up
            </button>
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

    const submitSignUp = (event) => {
      event.preventDefault();
      const body = {
        username: userData.name,
        email: userData.email,
        password: userData.password,
        gender: userData.gender,
      };
      dispatch(postSignUp(body));
      setWhichModal(MODAL_LOGIN);
    };

    if (whichModal === MODAL_SIGNUP) {
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
    }
  }
}