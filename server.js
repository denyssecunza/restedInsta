const express = require("express");
const app = express();
const queries = require("./db/dbqueries");
const PORT = process.env.PORT || 3000;

app.get("/starter_route", (req, res) => {
  res.send({ express: "The backend is connected to React" });
});

app.get("/", (req, res) => {
  //   queries.getAll("users").then((users) => {
  //     res.json(users);
  //   });
  queries.getAll("photos").then((photo) => {
    res.json(photo);
  });
  //res.send({ express: "The backend is connected to React" });
});

app.listen(PORT, () => console.log(`Listen on port http://localhost:${PORT}`));
