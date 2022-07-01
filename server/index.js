const express = require("express");
const cors = require("cors");
const path = require("path");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;

const isDev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 5000;

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.error(
      `Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`
    );
  });
} else {
  const app = express();

  // Route API requests.
  // https://stackoverflow.com/a/67650038/6305196
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // TODO: add production url and remove localhost.
  app.use(function (req, res, next) {
    // https://enable-cors.org/server_expressjs.html
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  // All requests to api/v1/weather will use the /api/v1/weather file
  app.use("/api/v1/weather", require("./api/v1/weather"));
  // app.get("/api", (req, res) => {
  //   res.set("Content-Type", "application/json");
  //   res.send('{"message":"Hello from the custom server!"}');
  // });

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, "../react-ui/build")));

  // All remaining requests return the React app, so it can handle routing.
  app.get("*", (request, response) => {
    response.sendFile(
      path.resolve(__dirname, "../react-ui/build", "index.html")
    );
  });

  app.listen(PORT, () => {
    console.error(
      `Node ${
        isDev ? "dev server" : `cluster worker ${process.pid}`
      }: listening on port ${PORT}`
    );
  });
}
