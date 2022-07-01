import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import "../App.css";
import Header from "../components/Header";
import { useTeamsQuery } from "../utils/ballDontLieApi";

function Teams() {
  const { data, isSuccess, isError } = useTeamsQuery();
  // Handles error in case of API slow fetch
  let teams = [];
  if (data) {
    teams = data.data;
  }
  // TODO: Handle Utah Jazz's city better.

  console.log(teams);

  return (
    <div className="App">
      <Header />
      <main>
        {isError && (
          <Typography variant="body1">
            {`There was a problem getting the NBA teams. Please reload the page to try again.`}
          </Typography>
        )}
        {isSuccess && (
          <Box m={3}>
            <Typography variant="h2">{"NBA Teams"}</Typography>
            <Typography mb={6} variant="body1" gutterBottom>
              {`Click on a city to see its current weather.`}
            </Typography>
            <Grid container spacing={2}>
              <Grid item md={8}>
                {teams.map((team) => {
                  return (
                    <Link to={`/weather/${team.city}`} key={team.id}>
                      <Typography variant="body1" gutterBottom>
                        {team.full_name}
                      </Typography>
                    </Link>
                  );
                })}
              </Grid>
            </Grid>
          </Box>
        )}
      </main>
    </div>
  );
}

export default Teams;
