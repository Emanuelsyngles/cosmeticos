const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.json());

let produtosRouter = require("./rotas/product");
const connectDB = require("./db");

connectDB();

app.use("/product", produtosRouter);

app.get("/", (req, res) => {
  res.send(produtosRouter);
});

app.listen(port, () => {
  console.log(`Servidor rodando em ${port}`);
});
