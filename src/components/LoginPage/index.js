import React from "react";
import Logo from "../../assets/Images/Logo.png";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();

  const handleSignIn = () => {
    history.push("/register");
  };

  const handleHome = () => {
    history.push("/");
  };

  return (
    <>
      <div className="bg-login">
        <img
          onClick={handleHome}
          className="login-logo"
          src={Logo}
          alt="sportsman"
        />
        <div className="login-container">
          <h2>SIGN IN</h2>

          <div class="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Email"
              name="email"
              id="email"
              required
            />
            <label for="email" class="form__label">
              Email
            </label>
          </div>

          <div class="form__group field">
            <input
              type="password"
              class="form__field"
              placeholder="Password"
              name="password"
              id="password"
              required
            />
            <label for="password" class="form__label">
              Password
            </label>
          </div>

          <button className="signin-button">SIGN IN</button>
          <div className="redirect">
            Don't have an account?
            <span onClick={handleSignIn}> Register here</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
