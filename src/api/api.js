// Fake API — simulates network fetch with a 1-second delay
// Demonstrates async/await, loading states, and error handling
import productsData from "../Components/products.js";

export function fetchProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsData);
    }, 1000);
  });
}
