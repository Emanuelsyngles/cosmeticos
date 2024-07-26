const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let produtosRouter = require("./rotas/product");

app.use("/product", produtosRouter);

app.get("/", (req, res) => {
  res.send("Api de produtos osméticos");
});

app.listen(port, () => {
  console.log(`Servidor rodando em ${port}`);
});
