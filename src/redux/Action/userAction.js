import axios from "axios";
import jwt_decode from "jwt-decode";
import { SIGN_IN, SIGN_UP, SET_TOKEN, SET_ONBOARD } from "./actionTypes";

export const signUp = (payload) => {
  return {
    type: SIGN_UP,
    payload,
  };
};

export const postSignUp = (body) => (dispatch) => {
  axios
    .post(`https://sportsmanapp.herokuapp.com/register`, body)
    .then((res) => {
      console.log("ini res =>", res);
      const decoded = jwt_decode(res.data.data.token);
      dispatch(signIn(decoded));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signIn = (payload) => {
  return {
    type: SIGN_IN,
    payload,
  };
};

export const postSignIn = (body) => (dispatch) => {
  axios
    .post(`https://sportsmanapp.herokuapp.com/login`, body)
    .then((res) => {
      console.log("ini res =>", res);
      const decoded = jwt_decode(res.data.data.token);
      dispatch(signIn(res.data.data));
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("userData", JSON.stringify(decoded));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const setOnboard = (userData) => {
  return (dispatch) => {
    return axios
      .post(`https://sportsmanapp.herokuapp.com//login/update`, {
        data: userData,
        headers: { Authorization: localStorage.getItem("access_token") },
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: SET_ONBOARD,
          payload: response.data.data,
        });
      });
  };
};

export const setDataToken = () => (dispatch) => {
  dispatch({
    type: SET_TOKEN,
    payload: localStorage.getItem("token"),
  });
};
