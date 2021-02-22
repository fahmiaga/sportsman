import {
  SIGN_IN,
  SIGN_UP,
  SET_TOKEN,
  SET_ONBOARD,
} from "../Action/actionTypes";

const initialState = {
  signUp: "",
  signIn: "",
  jwtToken: "",
  token: localStorage.getItem("token") || "",
  status: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        signUp: action.payload,
      };
    case SIGN_IN:
      return {
        ...state,
        // signIn: action.payload,
        token: action.payload.token,
        status: action.payload.status,
      };
    case SET_ONBOARD:
      return {
        ...state,
        // signIn: action.payload,
        // token: action.payload.token,
        status: action.payload.status,
      };
    case SET_TOKEN:
      return {
        ...state,
        jwtToken: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
