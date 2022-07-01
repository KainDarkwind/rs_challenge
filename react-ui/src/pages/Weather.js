import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCityQuery } from "../utils/weatherApi";
import { Box, Button, Grid, Typography } from "@mui/material";
import Header from "../components/Header";
import "../App.css";

// The Weather page is accessed by clicking a team on the Teams page.  It will display the data obtained from the weatherAPI, in a friendly paragraph format.

function Weather() {
  const { city } = useParams();
  const { data, isSuccess, isError } = useCityQuery(city);
  // Handles error in case of API slow fetch
  let weather = {};
  if (isSuccess) {
    weather = data;
  }
  console.log(weather);

  //We use {isSuccess && ()} to avoid displaying the paragraph structure without the data from the API.

  return (
    <div className="App">
      <Header />
      <main>
        {isError && (
          <Typography variant="body1">
            {`There was a problem getting the weather. Please reload the page to try again.`}
          </Typography>
        )}
        {isSuccess && (
          <Box m={3}>
            <Grid container>
              <Grid item md={3}></Grid>
              <Grid item md={6}>
                <Typography mb={6} variant="h2">
                  {weather.location.name} Weather
                </Typography>
                <Typography mb={4} variant="body1">
                  {`Welcome to ${weather.location.name}! Today it is ${weather.current.temp_f} degrees Fahrenheit (${weather.current.temp_c} C) and ${weather.current.condition.text}. We have a ${weather.current.wind_dir} wind blowing at ${weather.current.wind_mph} mph (${weather.current.wind_kph} kph). Given the ${weather.current.humidity}% humidity, it's going to feel more like ${weather.current.feelslike_f} degrees
                  Fahrenheit (${weather.current.feelslike_c} C) out there. Enjoy your stay!`}
                </Typography>
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
        )}
      </main>
    </div>
  );
}

export default Weather;
