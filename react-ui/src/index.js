import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Teams from "./pages/Teams";
import Weather from "./pages/Weather";
import CssBaseline from "@mui/material/CssBaseline";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/weather/:id" element={<Weather />} />
        </Routes>
      </Router>
    </CssBaseline>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
