import { createContext, useState, useEffect, useCallback, useContext } from "react";
import { ProductsContext } from "./ProductsContext";

export const WishlistContext = createContext();

export default function WishlistProvider({ children }) {
  const { products } = useContext(ProductsContext);

  // Initialize from localStorage
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("techstore-wishlist");

    if (savedWishlist) {
      try {
        return JSON.parse(savedWishlist);
      } catch (error) {
        console.error("Error parsing wishlist from localStorage", error);
        return [];
      }
    }
    return [];
  });

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem("techstore-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Toggle wishlist (add/remove product ID)
  const toggleWishlist = useCallback((productID) => {
    setWishlist((prev) => {
      if (prev.includes(productID)) {
        return prev.filter((id) => id !== productID);
      } else {
        return [...prev, productID];
      }
    });
  }, []);

  // Wishlist items (full product objects)
  const wishlistItems = products.filter((p) => wishlist.includes(p.id));

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        wishlistItems,
        wishlistCount: wishlist.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
