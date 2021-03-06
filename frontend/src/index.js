import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { restoreCSRF, csrfFetch } from "./store/csrf";
import "./index.css";
import App from "./App";
import configureStore from "./store";
import * as sessionActions from "./store/session";
import * as commentActions from './store/comment';
import * as songActions from './store/song'
import * as usersActions from './store/users'
const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
  window.commentActions = commentActions;
  window.songActions =  songActions;
  window.usersActions = usersActions;
}

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);

//!test csrfFetch by running this in DEVTOOLS
//window.csrfFetch('/api/test', {
// method: 'POST',
// body: JSON.stringify({ credential: 'Demo-lition', password: 'password' })
//}).then(res => res.json()).then(data => console.log(data));
