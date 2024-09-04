import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from 'react-router-dom';
import './index.css';
import { AppProvider } from "./AppContext";
import { Root } from "./Root";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <Root />
      </AppProvider>
    </Router>
  </React.StrictMode>
);