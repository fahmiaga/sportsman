import { combineReducers } from "redux";
import userReducer from "./Reducer/userReducer";
import contentReducer from "./Reducer/contentReducer";

export default combineReducers({
  users: userReducer,
  content: contentReducer,
});
