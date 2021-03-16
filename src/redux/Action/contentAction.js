import {
  DELETE_CONTENT,
  GET_CONTENT,
  GET_CONTENT_BY_ID,
  POST_CONTENT,
  PUT_CONTENT,
  GET_HISTORY_TRACKING,
} from "../Action/actionTypes";
import axios from "axios";

export const getContent = (token) => (dispatch) => {
  const config = {
    headers: { Authorization: token },
  };
  axios
    .get(`https://sportsmanapp.herokuapp.com/content/all`, config)
    .then((res) => {
      dispatch({
        type: GET_CONTENT,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getContentById = (token, id) => (dispatch) => {
  const config = {
    headers: { Authorization: token },
  };
  axios
    .get(`https://sportsmanapp.herokuapp.com/content/${id}`, config)
    .then((res) => {
      dispatch({
        type: GET_CONTENT_BY_ID,
        payload: {
          video: res.data,
          message: res,
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postContent = (token, input) => (dispatch) => {
  const config = {
    headers: { Authorization: token },
  };
  axios
    .post(`https://sportsmanapp.herokuapp.com/admin/content`, input, config)
    .then((res) => {
      dispatch({
        type: POST_CONTENT,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const putContent = (token, input, id) => (dispatch) => {
  const config = {
    headers: { Authorization: token },
  };
  axios
    .put(
      `https://sportsmanapp.herokuapp.com/admin/content/${id}`,
      input,
      config
    )
    .then((res) => {
      dispatch({
        type: PUT_CONTENT,
        payload: res,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteContent = (token, id) => (dispatch) => {
  const config = {
    headers: { Authorization: token },
  };
  axios
    .delete(`https://sportsmanapp.herokuapp.com/admin/content/${id}`, config)
    .then((res) => {
      dispatch({
        type: DELETE_CONTENT,
        payload: res,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getTracking = () => (dispatch) => {
  const config = {
    headers: { Authorization: localStorage.getItem("token") },
  };
  axios
    .get(`https://sportsmanapp.herokuapp.com/tracking`, config)
    .then((res) => {
      dispatch({
        type: GET_HISTORY_TRACKING,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
