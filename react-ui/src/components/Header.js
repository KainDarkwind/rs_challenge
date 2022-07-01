import React from "react";
import rsLogo from "../logo-with-name.png";
import "../App.css";

function Header() {
  return (
    <header className="App-header">
      <a href="/">
        <img src={rsLogo} className="App-logo" alt="logo" />
      </a>
    </header>
  );
}

export default Header;
