import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import UserProvider from "./Context/UserProvider.jsx";
import ThemeProvider from "./Context/ThemeContext.jsx";
import ProductsProvider from "./Context/ProductsContext.jsx";
import CartProvider from "./Context/CartContext.jsx";
import WishlistProvider from "./Context/WishlistContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <ThemeProvider>
        <ProductsProvider>
          <CartProvider>
            <WishlistProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </WishlistProvider>
          </CartProvider>
        </ProductsProvider>
      </ThemeProvider>
    </UserProvider>
  </StrictMode>
);
