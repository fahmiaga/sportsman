import axios from "axios";
import jwt_decode from "jwt-decode";
import {
  SIGN_IN,
  SIGN_UP,
  SET_BOARDING,
  SIGN_OUT,
  SET_TOKEN,
} from "./actionTypes";

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
      // const decoded = jwt_decode(res.data.data);
      dispatch(signUp(res.data.data));
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
      // const decoded = jwt_decode(res.data.data.token);
      dispatch(signIn(res.data.data));
      localStorage.setItem("token", res.data.data.token);
      // localStorage.setItem("userData",JSON.stringify(decoded))
    })
    .catch((err) => {
      console.log(err);
    });
};

export const onBoardingData = (payload) => {
  return {
    type: SET_BOARDING,
    payload,
  };
};

export const putBoardingData = (token, body) => (dispatch) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  axios
    .put("https://sportsmanapp.herokuapp.com/login/update", body, config)
    .then((res) => {
      console.log("ini res =>", res);
      // const decoded = jwt_decode(res.data.data);
      dispatch(onBoardingData(res.data.data));
      // localStorage.getItem("token", decoded);
    })
    .catch((err) => {
      console.log("error =>", err);
    });
};

// export const onBoardingData = (token, body) => (dispatch) => {
//   const config = {
//     headers: { Authorization: token },
//   };
//   axios
//     .post(`https://sportsmanapp.herokuapp.com/login/update`, body, config)
//     .then((res) => {
//       console.log("response", res);
//       dispatch({
//         type: SET_BOARDING,
//         payload: res.data.data,
//       });
//     });
// };

export const signOut = () => (dispatch) => {
  dispatch({
    type: SIGN_OUT,
    payload: localStorage.removeItem("token"),
  });
};

export const setDataToken = () => (dispatch) => {
  dispatch({
    type: SET_TOKEN,
    payload: localStorage.getItem("token"),
  });
};
