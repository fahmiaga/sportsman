import React, { useState, useEffect } from "react";
import Logo from "../../assets/Images/Logo.png";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postSignIn } from "../../redux/Action/userAction";
import jwt_decode from "jwt-decode";
import _ from "lodash";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";

const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users.token);
  const dataStatus = useSelector((state) => state.users.status);
  // const tokenDecoded = jwt_decode(data);
  const user = localStorage.getItem("userData");
  const obj = JSON.parse(user);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSignUp = () => {
    history.push("/register");
  };

  const handleHome = () => {
    history.push("/");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("Submit login");
    dispatch(postSignIn(userData));
    if (_.isEmpty(data) && _.isEmpty(dataStatus)) {
      NotificationManager.info("Loading", "", 500);
    }
  };

  const handleChange = (e) => {
    // console.log("log handle change");
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  // useEffect(() => {
  //   if (data && !_.isEmpty(data)) {
  //     return tokenDecoded;
  //   }
  // }, [tokenDecoded, data]);

  useEffect(() => {
    if (dataStatus === false) {
      history.push("/onboarding");
    } else if (dataStatus === true) {
      history.push("/");
    } else {
      history.push("/login");
    }
  }, [dataStatus, history]);

  console.log("userData =>", userData);
  console.log("data =>", data);
  console.log("status =>", dataStatus);
  // console.log("userData from =>", obj);

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
          <div className="form__group field">
            <input
              type="email"
              class="form__field"
              placeholder="Email"
              name="email"
              id="email"
              required
              onChange={handleChange}
            />
            <label for="email" class="form__label">
              Email
            </label>
          </div>

          <div className="form__group field">
            <input
              type="password"
              class="form__field"
              placeholder="Password"
              name="password"
              id="password"
              required
              onChange={handleChange}
            />
            <label for="password" class="form__label">
              Password
            </label>
          </div>

          <button onClick={onSubmit} className="signin-button">
            SIGN IN
          </button>
          <div className="redirect">
            Don't have an account?
            <span onClick={handleSignUp}> Register here</span>
            {/* <p>Logged in as: {tokenDecoded.name}</p> */}
            <NotificationContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
