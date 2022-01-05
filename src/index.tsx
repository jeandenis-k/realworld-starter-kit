import React from "react";
import ReactDOM from "react-dom";
import { ReactLocation } from "react-location";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const location = new ReactLocation();

ReactDOM.render(
  <React.StrictMode>
    <App location={location} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
