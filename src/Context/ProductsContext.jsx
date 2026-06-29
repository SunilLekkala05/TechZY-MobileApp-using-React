import { createContext, useState, useEffect, useMemo, useCallback } from "react";
import { fetchProducts } from "../api/api";

export const ProductsContext = createContext();

export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products on mount via fake API
  useEffect(() => {
    let isCancelled = false;

    async function loadProducts() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchProducts();

        if (!isCancelled) {
          setProducts(data);
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err.message || "Failed to load products");
          console.error("Error fetching products:", err);
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    }

    loadProducts();

    // Cleanup to prevent state updates on unmounted component
    return () => {
      isCancelled = true;
    };
  }, []);

  // Memoize the list of unique brands
  const allBrands = useMemo(
    () => [...new Set(products.map((p) => p.brand))],
    [products]
  );

  // Memoize best-selling products
  const bestProducts = useMemo(
    () => products.filter((p) => p.bestseller),
    [products]
  );

  // Retry function for error recovery
  const retryFetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (err) {
      setError(err.message || "Failed to load products");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoading,
        error,
        allBrands,
        bestProducts,
        retryFetch,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
