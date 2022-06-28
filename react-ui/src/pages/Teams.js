import React from "react";

import rsLogo from "../logo-with-name.png";
import "../App.css";

function Teams() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={rsLogo} className="App-logo" alt="logo" />
      </header>
      <main>
        <h1>List of NBA Teams</h1>
      </main>
    </div>
  );
}

export default Teams;
