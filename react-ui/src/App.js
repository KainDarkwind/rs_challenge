import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import rsLogo from "./logo-with-name.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={rsLogo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Button
          variant="contained"
          target="_blank"
          href="https://github.com/ReWattInc/rs_challenge/blob/main/README.md"
          size="large"
          sx={{ m: 2, bgcolor: "#00003C" }}
          disableElevation
        >
          Instructions
        </Button>
        <Button
          variant="contained"
          target="_blank"
          href="mailto:paul@realsynch.com?subject=RealSynch Developer Challenge"
          size="large"
          sx={{ m: 2, bgcolor: "#00003C" }}
          disableElevation
        >
          Ask a Question
        </Button>
        <Link to="/teams">
          <Button
            variant="contained"
            size="large"
            sx={{ m: 2, bgcolor: "#00003C" }}
            disableElevation
          >
            Display NBA Teams
          </Button>
        </Link>
      </main>
    </div>
  );
}

export default App;
