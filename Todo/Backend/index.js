const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

const products = [
  { id: 1, name: "Macbook" },
  { id: 1, name: "Iphone" },
];

app.use(cors());

app.get("/", (req, res) => {
  //  Anything
  res.send("Boltson bshde");
});

const tasks = [];

app.get("/tasks", (req, res) => {
  //  fetch all task
  res.send([]);
});

app.post("/tasks", (req, res) => {
  //  fetch all task
  res.send([]);
});

app.delete("/tasks/:id", (req, res) => {
  const id = req.params.id;
  //  fetch all task
  res.send([]);
});

app.put("/tasks/:id", (req, res) => {
  const id = req.params.id;
  //  fetch all task
  res.send([]);
});

app.get("/products", (req, res) => {
  // fetch database products
  res.json(products);
});

app.post("/products", (req, res) => {
  // add products to data base
  res.send("POST products");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
