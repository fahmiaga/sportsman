import { GET_CONTENT } from "../Action/actionTypes";
import axios from "axios";

export const getContent = () => (dispatch) => {
  axios
    .get(`api/content/all`)
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
