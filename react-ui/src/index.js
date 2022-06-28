import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Teams from "./pages/Teams";
import CssBaseline from "@mui/material/CssBaseline";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <CssBaseline>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/teams" element={<Teams />} />
      </Routes>
    </Router>
  </CssBaseline>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
