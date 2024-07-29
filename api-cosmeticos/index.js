const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(express.json());

app.use(cors());
let produtosRouter = require("./rotas/product");
const connectDB = require("./db");
const { error } = require("console");

connectDB();

app.use("/product", produtosRouter);

app.get("/", (req, res) => {
  res.send(produtosRouter);
});

app.listen(port, () => {
  console.log(`Servidor rodando em ${port}`);
});
