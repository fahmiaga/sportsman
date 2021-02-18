import React from "react";
import { useHistory } from "react-router-dom";

import Navbar from "../Navbar2";

const RegisterPage = () => {
  const history = useHistory();

  const handleSignIn = () => {
    history.push("/login");
  };

  return (
    <>
      <Navbar />
      <div className="bg-login">
        <div className="login-container">
          <h2>Register</h2>

          <div class="form__group field">
            <input
              type="input"
              class="form__field"
              placeholder="Name"
              name="name"
              id="name"
              required
            />
            <label for="name" class="form__label">
              Name
            </label>
          </div>

          <div class="form__group field">
            <input
              type="emailt"
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
              placeholder="Pasword"
              name="password"
              id="password"
              required
            />
            <label for="password" class="form__label">
              Password
            </label>
          </div>

          <button className="signin-button">SIGN UP</button>
          <div className="redirect">
            Already have an account?
            <span onClick={handleSignIn}> Login here</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
