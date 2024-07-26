const express = require("express");
const Router = express.Router();

let products = [
  {
    id: 1,
    name: "creme de pele",
    price: 29.99,
    description: "Sua pele mácia igual a de um BêBê",
  },
  {
    id: 2,
    name: "shampoo",
    price: 17.65,
    description: "para todos os tipos de cabelo",
  },
];

Router.get("/", (req, res) => {
  res.json(products);
});

Router.get("/:id", (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).send("Produto não encontrado");
  }
});

Router.post("/", (req, res) => {
  const novoProduto = req.body;
  novoProduto.id = products.length + 1;
  products.push(novoProduto);
  res.status(201).json(novoProduto);
});

Router.put("/:id", (req, res) => {
  const productId = parseInt(req.params.id, 10);
  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex !== -1) {
    products[productIndex] = { ...products[productIndex], ...req.body };
    res.json(products[productIndex]);
  } else {
    res.status(404).send("Produto não encontrado");
  }
});

Router.delete("/:id", (req, res) => {
  const productId = parseInt(req.params.id, 10);
  products = products.filter((p) => p.id !== productId);

  res.status(204).send();
});

module.exports = Router;
