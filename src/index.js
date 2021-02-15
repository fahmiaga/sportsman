import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";
=======
import "./styles/main.scss";
import "./index.css";
>>>>>>> 9fd05145aaa2877799957e35aae5d5e73477b869
import "./styles/main.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./redux/rootReducer";

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
<<<<<<< HEAD
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
=======
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
>>>>>>> 9fd05145aaa2877799957e35aae5d5e73477b869
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
