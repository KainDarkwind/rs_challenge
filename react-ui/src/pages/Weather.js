import React from "react";
import { useParams } from "react-router-dom";
import rsLogo from "../logo-with-name.png";
import "../App.css";

function Weather() {
  const { id } = useParams();

  return (
    <div className="App">
      <header className="App-header">
        <img src={rsLogo} className="App-logo" alt="logo" />
      </header>
      <main>
        <p>{id}</p>
      </main>
    </div>
  );
}

export default Weather;
