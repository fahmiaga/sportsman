import {
  SIGN_IN,
  SIGN_UP,
  SET_BOARDING,
  SIGN_OUT,
  SET_TOKEN,
} from "../Action/actionTypes";
import jwt_decode from "jwt-decode";

const initialState = {
  signUp: "",
  signIn: "",
  token: localStorage.getItem("token") || "",
  status: null,
  jwtToken: "",
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
        token: jwt_decode(action.payload.token),
        status: action.payload.status,
      };
    case SET_BOARDING:
      return {
        ...state,
        boarding: action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        signOut: action.payload,
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
