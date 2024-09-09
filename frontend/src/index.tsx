import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from 'react-router-dom';
import './index.css';
import { Root } from "./Root";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Root />
      </Provider>
    </Router>
  </React.StrictMode>
);