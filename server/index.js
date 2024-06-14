const express = require("express");
const parser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.get("/", (req, res) => {
  res.send("Hi");
});

app.post("/api/register", async (req, res) => {
  let data = req.body;
  res.send({ a: 1, loggedIn: true });
});

app.post("/api/login", async (req, res) => {
  let data = req.body;
  res.send({ a: 1, loggedIn: true });
});

app.post("/api/products", async (req, res) => {
  let data = req.body;
  res.send({ a: 1, loggedIn: true });
});

app.listen(5000, () => {
  console.log("started");
});
