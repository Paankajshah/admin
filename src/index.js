import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Pages/App";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer } from "./Store/Reducer/RootReducer/rootReducer";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

axios.defaults.baseURL = 'http://localhost:8000'

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
