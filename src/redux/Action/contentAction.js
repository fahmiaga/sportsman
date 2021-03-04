import { GET_CONTENT, GET_CONTENT_BY_ID } from "../Action/actionTypes";
import axios from "axios";

export const getContent = (token) => (dispatch) => {
  const config = {
    headers: { Authorization: token },
  };
  axios
    .get(`api/content/all`, config)
    .then((res) => {
      console.log("coba", res);
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
    .get(`/api/content/${id}`, config)
    .then((res) => {
      console.log("coba", res);
      dispatch({
        type: GET_CONTENT_BY_ID,
        payload: res.data.video,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
