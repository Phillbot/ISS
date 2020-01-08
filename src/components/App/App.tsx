import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../../Router";

import "materialize-css/dist/css/materialize.min.css";

import "./app.scss";

export default function App() {
  return (
    <BrowserRouter basename="iss">
      <div className="app">
        <Router />
      </div>
    </BrowserRouter>
  );
}
