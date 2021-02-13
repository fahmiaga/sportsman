const initialState = {
    signUp: null,
    signIn: null,
    jwtToken: "",
    uploadImg: null,
  };
  
  const userReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "POST_SIGNUP":
        return {
          ...state,
          signUp: payload,
        };
      case "POST_SIGNIN":
        return {
          ...state,
          signIn: payload,
        };
      case "SET_TOKEN":
        return {
          ...state,
          jwtToken: payload,
        };
  
      default:
        return state;
    }
  };
  
  export default userReducer;
  