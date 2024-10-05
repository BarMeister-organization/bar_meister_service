import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from 'react-router-dom';
import { Root } from "./Root";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "./components/shared/Loader/Loader";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <Root />
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>
);
