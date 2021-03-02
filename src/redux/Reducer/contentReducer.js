import { GET_CONTENT } from "../Action/actionTypes";

const initialState = {
  content: [],
};

const contentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CONTENT:
      return {
        ...state,
        content: payload,
      };
    default:
      return state;
  }
};

export default contentReducer;
