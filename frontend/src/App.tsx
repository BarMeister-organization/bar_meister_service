import React from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";
import "./reset.css"

export const App: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};