import React from "react";
import { Link } from "react-router-dom";
import rsLogo from "../logo-with-name.png";
import "../App.css";

function Teams() {
  const MockData = {
    data: [
      {
        id: 14,
        abbreviation: "LAL",
        city: "Los Angeles",
        conference: "West",
        division: "Pacific",
        full_name: "Los Angeles Lakers",
        name: "Lakers",
      },
      {
        id: 15,
        abbreviation: "XYZ",
        city: "Monroe",
        conference: "North",
        division: "Australian",
        full_name: "Detroit Bulls",
        name: "Bulls",
      },
    ],
    meta: {
      total_pages: 1,
      current_page: 1,
      next_page: null,
      per_page: 30,
      total_count: 30,
    },
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={rsLogo} className="App-logo" alt="logo" />
      </header>
      <main>
        <h1>Cities of NBA Teams</h1>
        <p>Click on a city to see its current weather.</p>
        {MockData.data.map((team) => {
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
