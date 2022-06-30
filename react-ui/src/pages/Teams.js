import React from "react";
import { Link } from "react-router-dom";
import rsLogo from "../logo-with-name.png";
import "../App.css";
import { useTeamsQuery } from "../utils/ballDontLieApi";

function Teams() {
  const { data, isSuccess, isError } = useTeamsQuery();
  // Handles error in case of API slow fetch
  let teams = [];
  if (data) {
    teams = data.data;
  }
  // TODO: Consider handling Utah Jazz's city better.

  console.log(teams);

  return (
    <div className="App">
      <header className="App-header">
        <img src={rsLogo} className="App-logo" alt="logo" />
      </header>
      <main>
        {isError && (
          <p>
            There was a problem getting the NBA teams. Please reload the page to
            try again.
          </p>
        )}
        {isSuccess && (
          <>
            <h1>Cities of NBA Teams</h1>
            <p>Click on a city to see its current weather.</p>
            {teams.map((team) => {
              return (
                <Link to={`/weather/${team.city}`} key={team.id}>
                  <p>{team.full_name}</p>
                </Link>
              );
            })}
          </>
        )}
      </main>
    </div>
  );
}

export default Teams;
