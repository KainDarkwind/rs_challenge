import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCityQuery } from "../utils/weatherApi";
import { Box, Button, Grid, Typography } from "@mui/material";
import rsLogo from "../logo-with-name.png";
import "../App.css";

// The Weather page is accessed by clicking a team on the Teams page.  It will display the data obtained from the weatherAPI, in a friendly paragraph format.

function Weather() {
  const { city } = useParams();
  const { data, isSuccess } = useCityQuery(city);
  // Handles error in case of API slow fetch
  let weather = {};
  if (isSuccess) {
    weather = data;
  }
  console.log(weather);

  //We use {isSuccess && ()} to avoid displaying the paragraph structure without the data from the API.

  return (
    <div className="App">
      <header className="App-header">
        <img src={rsLogo} className="App-logo" alt="logo" />
      </header>
      <main>
        {isSuccess && (
          <>
            <Typography variant="h2" align="center">
              {weather.location.name} Weather
            </Typography>
            <Box m={3}>
              <Grid container>
                <Grid item md={3}></Grid>
                <Grid item md={6}>
                  <p>
                    {`Welcome to ${weather.location.name}! Today it is ${weather.current.temp_f} degrees F (${weather.current.temp_c} C) and ${weather.current.condition.text}. We have a ${weather.current.wind_dir} wind blowing at ${weather.current.wind_mph} mph (${weather.current.wind_kph} kph). Given the ${weather.current.humidity}% humidity, it's going to feel more like ${weather.current.feelslike_f} degrees
                  F (${weather.current.feelslike_c} C) out there. Enjoy your stay!`}
                  </p>
                  <Link to="/teams">
                    <Button
                      variant="text"
                      size="small"
                      sx={{ bgcolor: "#FFFFFF" }}
                      disableElevation
                    >
                      Back to Teams
                    </Button>
                  </Link>
                </Grid>
                <Grid item md={3}></Grid>
              </Grid>
            </Box>
          </>
        )}
      </main>
    </div>
  );
}

export default Weather;
