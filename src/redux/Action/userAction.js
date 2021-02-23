import axios from "axios";
import jwt_decode from "jwt-decode";
import {
  SIGN_IN,
  SIGN_UP,
  SET_BOARDING,
  SIGN_OUT,
  SET_TOKEN,
  UPLOAD_IMAGE,
} from "./actionTypes";

export const signUp = (payload) => {
  return {
    type: SIGN_UP,
    payload,
  };
};

export const postSignUp = (body) => (dispatch) => {
  axios
    .post(`api/register`, body)
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

export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    token,
  };
};

export const postSignIn = (body) => (dispatch) => {
  axios
    .post(`api/login`, body)
    .then((res) => {
      console.log("ini res =>", res);
      // const decoded = jwt_decode(res.data.data.token);
      dispatch(signIn(res.data.data));
      // localStorage.setItem('userData', JSON.stringify(decoded));
      dispatch(setToken(res.data.data.token));
      localStorage.setItem("token", res.data.data.token);
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
  console.log("boarding", token);
  const config = {
    headers: { Authorization: token },
  };
  axios
    .put(`api/login/update`, body, config)
    .then((res) => {
      console.log("ini res =>", res);
      dispatch(onBoardingData(res));
    })
    .catch((err) => {
      console.log(err);
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

// export const setDataToken = () => (dispatch) => {
// 	dispatch({
// 		type: SET_TOKEN,
// 		payload: localStorage.getItem('token'),
// 	});
// };

export const uploadImage = (token, body) => (dispatch) => {
  const config = {
    headers: { Authorization: token, "Content-Type": "multipart/form-data" },
  };
  console.log("coba", axios);
  axios
    .post(`https://sportsmanapp.herokuapp.com/upload`, body, config)
    .then((res) => {
      dispatch({
        type: UPLOAD_IMAGE,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
