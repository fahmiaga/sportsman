import axios from "axios";
import jwt_decode from "jwt-decode";
import _ from "lodash";
import {
  SIGN_IN,
  SIGN_UP,
  SET_BOARDING,
  SIGN_OUT,
  SET_TOKEN,
  UPLOAD_IMAGE,
  PUT_USERDATA,
  POST_CONTACT,
  MESSAGE_ERROR,
  GOOGLE_AUTH,
  DELETE_ACCOUNT,
  GET_USERDATA,
  POST_EXERCISE,
  GET_EXERCISE,
  PUT_USERPASSWORD,
} from "./actionTypes";

export const signUp = (payload, res) => {
  return {
    type: SIGN_UP,
    payload,
  };
};

export const postSignUp = (body) => (dispatch) => {
  axios
    .post(`https://sportsmanapp.herokuapp.com/register`, body)
    .then((res) => {
      dispatch(signUp(res));
    })
    .catch((err) => {
      dispatch({
        type: MESSAGE_ERROR,
        payload: err.response,
      });
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
  return axios
    .post(`https://sportsmanapp.herokuapp.com/login`, body)
    .then((res) => {
      const decoded = jwt_decode(res.data.data.token);
      dispatch(signIn(res.data.data));
      localStorage.setItem("userData", JSON.stringify(decoded));
      dispatch(setToken(res.data.data.token));
      localStorage.setItem("token", res.data.data.token);
      return true;
    })
    .catch((err) => {
      dispatch({
        type: MESSAGE_ERROR,
        payload: err.response,
      });
      return false;
    });
};

export const googleSignin = () => (dispatch) => {
  axios
    .get(`https://sportsmanapp.herokuapp.com/google`)
    .then((res) => {
      dispatch({
        type: GOOGLE_AUTH,
        payload: res.request.responseURL,
      });
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

export const putBoardingData = (body) => async (dispatch) => {
  const config = {
    headers: { Authorization: localStorage.getItem("token") },
  };
  axios
    .put(`https://sportsmanapp.herokuapp.com/login/update`, body, config)
    .then((res) => {
      dispatch(onBoardingData(res));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const signOut = () => (dispatch) => {
  dispatch({
    type: SIGN_OUT,
    payload: localStorage.removeItem("token"),
  });
};

export const uploadImage = (body) => (dispatch) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "multipart/form-data",
    },
  };
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

export const putUserData = (userData) => (dispatch) => {
  const config = {
    headers: { Authorization: localStorage.getItem("token") },
  };
  axios
    .put(`https://sportsmanapp.herokuapp.com/update`, userData, config)
    .then((res) => {
      localStorage.setItem("token", res.data.data[0]);
      let decoded;
      if (res.data.data && !_.isEmpty(res.data.data[0])) {
        decoded = jwt_decode(res.data.data[0]);
      }
      dispatch({
        type: PUT_USERDATA,

        payload: {
          user: decoded,
          message: res,
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const putUserPassword = (userData) => (dispatch) => {
  const config = {
    headers: { Authorization: localStorage.getItem("token") },
  };
  axios
    .put(`https://sportsmanapp.herokuapp.com/update`, userData, config)
    .then((res) => {
      localStorage.setItem("token", res.data.data[0]);
      let decoded;
      if (res.data.data && !_.isEmpty(res.data.data[0])) {
        decoded = jwt_decode(res.data.data[0]);
      }
      dispatch({
        type: PUT_USERPASSWORD,

        payload: {
          user: decoded,
          message: res,
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postContact = (body) => (dispatch) => {
  const config = {
    headers: { Authorization: localStorage.getItem("token") },
  };
  axios
    .post(`https://sportsmanapp.herokuapp.com/contact-us`, body, config)
    .then((res) => {
      dispatch({
        type: POST_CONTACT,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteAccount = () => (dispatch) => {
  const config = {
    headers: { Authorization: localStorage.getItem("token") },
  };
  axios
    .delete(`https://sportsmanapp.herokuapp.com/users/delete`, config)
    .then((res) => {
      dispatch({
        type: DELETE_ACCOUNT,
        payload: res.data.message,
      });
    });
};

export const getUserData = () => (dispatch) => {
  const config = {
    headers: { Authorization: localStorage.getItem("token") },
  };
  axios
    .get(`https://sportsmanapp.herokuapp.com/get`, config)
    .then((res) => {
      dispatch({
        type: GET_USERDATA,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getExercise = () => (dispatch) => {
  const config = {
    headers: { Authorization: localStorage.getItem("token") },
  };
  axios
    .get(`https://sportsmanapp.herokuapp.com/history`, config)
    .then((res) => {
      console.log("ini exercise =>", res);
      if (res.status === 200) {
        dispatch({
          type: GET_EXERCISE,
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
export const postExercise = (body) => (dispatch) => {
  const config = {
    headers: { Authorization: localStorage.getItem("token") },
  };
  axios
    .post(`https://sportsmanapp.herokuapp.com/history`, body, config)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: POST_EXERCISE,
          payload: res,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
