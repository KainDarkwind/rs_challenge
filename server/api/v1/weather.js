// The weather route
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
const axios = require("axios").default;
const express = require("express");
const router = express.Router();

// @route      GET api/v1/weather/:city
// @desc       Get the weather for the city selected
// @access     Public

// When something makes a request to api/v1/weather/ and weather is followed by a city, do this:
router.get("/:city", (req, res) => {
  const city = req.params.city;
  const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}&aqi=no`;
  console.log(req.params.city);
  axios
    .get(url)
    .then((data) => {
      // handle success
      const currentWeather = data.data;
      console.log(currentWeather);
      res.status(200).json(currentWeather);
    })
    .catch((error) => {
      // handle error
      console.log(error);
      res.status(error.response.status).json(error.response);
    });
});

module.exports = router;
