import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom/";
// import { StateProvider } from "./StateProvider";
// import reducer, { initialState } from "./reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <StateProvider reducer={reducer} initialState={initialState}>
  <Router>
    <App />
  </Router>
  // </StateProvider>
);
