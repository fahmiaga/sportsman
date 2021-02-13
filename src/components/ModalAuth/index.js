import React from "react";
import Modal from "react-modal";
import logo from "../../assets/images/movie.png";
import { MODAL_LOGIN, MODAL_SIGNUP } from "../Header/index";

function NewModal({
  isModal,
  setIsModal,
  whichModal,
  setWhichModal,
  userData,
  setUserData,
}) {
  const handleLogin = (event) => {
    event.preventDefault();
    setIsModal(false);
  };

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const submitSignUp = (event) => {
    event.preventDefault();
    const newUser = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
    };
  };

  const sumbitSignIn = (event) => {
    event.preventDefault();
    const userLogin = {
      email: userData.email,
      password: userData.password,
    };
  };

  return (
    <div>
      <Modal
        isOpen={isModal}
        onRequestClose={() => setIsModal(false)}
        className="modal-container"
        overlayClassName="modal-overlay-center"
        contentLabel="Sign In"
      >
        {renderWhichModal()}
      </Modal>
    </div>
  );
  function renderWhichModal() {
    switch (whichModal) {
      case MODAL_LOGIN:
        return (
          <div className="home-signup">
            <h1>SIGN IN</h1>
            <form onSubmit={handleLogin} className="home-login-form">
              <div>Username</div>
              <input
                className="form-input"
                type="text"
                placeholder="email or username"
                onChange={handleChange}
              />
              <div>Password</div>
              <input
                className="form-input"
                type="password"
                placeholder="password"
                onChange={handleChange}
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
      case MODAL_SIGNUP:
        return (
          <div className="home-signup">
            <div className="title-wrap">
              <img className="logo-signup" src={logo} alt="logo" />
              <div>MilanTV</div>
            </div>
            <form onSubmit={handleLogin} className="home-login-form">
              <div>Full Name</div>
              <input
                className="form-input"
                type="text"
                placeholder="Full Name"
                onChange={handleChange}
              />
              <div>Email</div>
              <input className="form-input" type="email" placeholder="Email" />
              <div>Password</div>
              <input
                className="form-input"
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <button
                onClick={submitSignUp}
                type="submit"
                className="home-login-button"
              >
                Sign Up
              </button>
              <div className="redirect">
                Already have an account? {""}
                <span onClick={() => setWhichModal(MODAL_LOGIN)}>Log In</span>
              </div>
            </form>
          </div>
        );
      default:
        break;
    }
  }
}

export default NewModal;
