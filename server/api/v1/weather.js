// The weather resource
const express = require("express");
const router = express.Router();

// @route      GET api/v1/weather/:city
// @desc       Get the weather for the city selected
// @access     Public

router.get("/", (req, res) => {
  console.log("made it to the server");
  console.log(req.params.city);
  res.status(200).json(req.params);
});

module.exports = router;
