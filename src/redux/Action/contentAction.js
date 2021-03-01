import { GET_CONTENT } from "../Action/actionTypes";
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
