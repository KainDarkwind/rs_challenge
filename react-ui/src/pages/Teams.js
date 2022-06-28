import React from "react";
import { Link } from "react-router-dom";
import rsLogo from "../logo-with-name.png";
import "../App.css";
import { useTeamsQuery } from "../utils/ballDontLieApi";

function Teams() {
  const { data } = useTeamsQuery();
  const teams = data.data;
  console.log(teams);

  return (
    <div className="App">
      <header className="App-header">
        <img src={rsLogo} className="App-logo" alt="logo" />
      </header>
      <main>
        <h1>Cities of NBA Teams</h1>
        <p>Click on a city to see its current weather.</p>
        {teams.map((team) => {
          return (
            <Link to={`/weather/${team.id}`} key={team.id}>
              <p>{team.full_name}</p>
            </Link>
          );
        })}
      </main>
    </div>
  );
}

export default Teams;
