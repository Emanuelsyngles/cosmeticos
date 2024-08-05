const request = require("supertest");
const express = require("express");
const productsRouter = require("../rotas/product"); 

const app = express();
app.use(express.json());
app.use("/produtos", productsRouter);

describe("API Tests", () => {
  describe("GET /produtos", () => {
    it("deve retornar todos os produtos", async () => {
      const response = await request(app).get("/produtos");
      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe("GET /produtos/:id", () => {
    it("deve retornar um produto específico", async () => {
      const response = await request(app).get("/produtos/1");
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("id", 1);
    });

    it("deve retornar 404 se o produto não for encontrado", async () => {
      const response = await request(app).get("/produtos/999");
      expect(response.status).toBe(404);
      expect(response.text).toBe("Produto não encontrado");
    });
  });
});
