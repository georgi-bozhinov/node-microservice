const express = require('express');

const app = express();

app.get("/", (req, res) => {
  console.log(`I was called from host ${req.headers.host}.`);
  res.send("Node microservice called.");
});

app.get("/test", (_, res) => {
  res.send("Node microservice test endpoint called.");
});

app.listen(process.env.PORT || 3000);

module.exports = {app};
