const express = require("express");
const Router = express.Router();

let products = [
  {
    id: 1,
    name: "creme de pele",
    price: 29.99,
    description: "Hidratação da pele",
  },
  {
    id: 2,
    name: "shampoo",
    price: 17.65,
    description: "para todos os tipos de cabelo",
    image: "/imagens/cosmetico.png",
  },
  {
    id: 3,
    name: "Esmaltes",
    price: "5.50",
    description: "Esmalte de unhas",
  },
  {
    id: 4,
    name: "Máscara Facial",
    price: 12.99,
    description: "Máscara para revitalização da pele",
  },
  {
    id: 5,
    name: "Creme Anti-Idade",
    price: 45.0,
    description: "Creme para redução de rugas e linhas finas",
  },
  {
    id: 6,
    name: "Protetor Solar",
    price: 25.75,
    description: "Protetor solar para todos os tipos de pele",
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

module.exports = Router;
