import axios from "axios";

export const postSignUp = (body) => (dispatch) => {
  axios.post(`https://team-c.herokuapp.com/register`, body).then((res) => {
    dispatch({
      type: "POST_SIGNUP",
      payload: res.data.message,
    });
  });
};

export const postSignIn = (body) => (dispatch) => {
  axios.post(`https://team-c.herokuapp.com/login`, body).then((res) => {
    dispatch({
      type: "POST_SIGNIN",
      payload: res.data.data,
      token: localStorage.setItem("token", res.data.data),
    });
  });
};

export const setDataToken = () => (dispatch) => {
  dispatch({
    type: "SET_TOKEN",
    payload: localStorage.getItem("token"),
  });
};

export const setProfilePicture = (body) => (dispatch) => {
  axios.post(`https://team-c.herokuapp.com/upload`, body).then((res) => {
    dispatch({
      type: "PROFILE_PHOTO",
      payload: res.data,
    });
  });
};
