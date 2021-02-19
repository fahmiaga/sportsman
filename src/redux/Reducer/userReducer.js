import {SIGN_IN, SIGN_UP, SET_TOKEN} from "../Action/actionTypes";

const initialState = {
    signUp: "",
    signIn: "",
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
          signIn: action.payload,
        };
      case SET_TOKEN:
        return {
          ...state,
          jwtToken: action.payload,
        };
  
      default:
        return state
    }
  };
  
  export default userReducer;
  