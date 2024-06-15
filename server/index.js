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
  res.send([
    { title: "title 1", description: "description 1", id: 101 },
    { title: "title 2", description: "description 2", id: 102 },
  ]);
});

app.post("/api/cart", async (req, res) => {
  let data = req.body;
  res.send([
    { title: "title 1", description: "description 1", id: 101 },
    { title: "title 2", description: "description 2", id: 102 },
  ]);
});

app.post("/api/add", async (req, res) => {
  let data = req.body;
  console.log(data);
  res.send([
    { title: "title 1", description: "description 1", id: 101 },
    { title: "title 2", description: "description 2", id: 102 },
  ]);
});

app.post("/api/remove", async (req, res) => {
  let data = req.body;
  console.log(data);
  res.send([
    { title: "title 1", description: "description 1", id: 101 },
    { title: "title 2", description: "description 2", id: 102 },
  ]);
});

app.post("/api/product", async (req, res) => {
  res.send({ title: "title 1", description: "description 1", id: req.body.id });
});

app.listen(5000, () => {
  console.log("started");
});
