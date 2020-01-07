import React, { Component } from "react";
import M from "materialize-css";
import { BrowserRouter } from "react-router-dom";
import Router from "../../Router";
import Header from "../Header";

import "materialize-css/dist/css/materialize.min.css";

import "./app.scss";

export default class App extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Router />
        </div>
      </BrowserRouter>
    );
  }
}
