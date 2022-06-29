import React from "react";
import { useParams } from "react-router-dom";
import { useCityQuery } from "../utils/weatherApi";
import rsLogo from "../logo-with-name.png";
import "../App.css";

function Weather() {
  const { city } = useParams();
  const { data, isSuccess } = useCityQuery(city);
  // Handles error in case of API slow fetch
  let weather = {};
  if (isSuccess) {
    weather = data;
  }
  console.log(weather);

  return (
    <div className="App">
      <header className="App-header">
        <img src={rsLogo} className="App-logo" alt="logo" />
      </header>
      <main>
        {isSuccess && (
          <>
            <p>{weather.location.name}</p>
            <p>{weather.current.temp_f}</p>
            <p>{weather.current.condition.text}</p>
          </>
        )}
      </main>
    </div>
  );
}

export default Weather;
