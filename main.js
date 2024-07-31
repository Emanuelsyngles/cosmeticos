const apiURL = "http://localhost:3000/product";

async function fetchAndDisplayProducts() {
  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.error("Erro ao buscar os produtos:", error);
  }
}

function displayProducts(products) {
  const productsContainer = document.getElementById("products-container");
  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `
      <h2>${product.name}</h2>
      <p>Preço: R$ ${product.price}</p>
      <p>${product.description}</p>
    `;
    productsContainer.appendChild(productElement);
  });
}

fetchAndDisplayProducts();
