import { GET_CONTENT, GET_CONTENT_BY_ID } from "../Action/actionTypes";

const initialState = {
  content: [],
  video: "",
};

const contentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CONTENT:
      return {
        ...state,
        content: payload,
      };
    case GET_CONTENT_BY_ID:
      return {
        ...state,
        video: payload,
      };
    default:
      return state;
  }
};

export default contentReducer;
