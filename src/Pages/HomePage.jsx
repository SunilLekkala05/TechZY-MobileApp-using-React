// HomePage — Main landing page with hero, best sellers, and all products
import { useState, useMemo, useContext } from "react";
import { ProductsContext } from "../Context/ProductsContext";
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext";
import ItemCard from "../Components/Itemcard.jsx";
import Maincontent from "../Components/Maincontent.jsx";
import SortingBar from "../Components/SortingBar.jsx";
import LoadingSpinner from "../Components/LoadingSpinner.jsx";

export default function HomePage() {
  const { products, isLoading, error, allBrands, bestProducts, retryFetch } =
    useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  // Local state for search, brand filter, and sort
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortBy, setSortBy] = useState("");

  // useMemo — memoize filtering + sorting so it only recalculates when deps change
  const filteredProducts = useMemo(() => {
    // Step 1: Filter based on search + brand dropdown
    let result = products.filter((product) => {
      const matchesSearch = product.brand
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesBrand =
        selectedBrand === "All" || product.brand === selectedBrand;

      return matchesSearch && matchesBrand;
    });

    // Step 2: Sort based on filtered products
    if (sortBy === "rating-high") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "rating-low") {
      result = [...result].sort((a, b) => a.rating - b.rating);
    } else if (sortBy === "discount-high") {
      result = [...result].sort(
        (a, b) => b.discountPercentage - a.discountPercentage
      );
    } else if (sortBy === "discount-low") {
      result = [...result].sort(
        (a, b) => a.discountPercentage - b.discountPercentage
      );
    } else if (sortBy === "price-low") {
      result = [...result].sort((a, b) => a.discountCost - b.discountCost);
    } else if (sortBy === "price-high") {
      result = [...result].sort((a, b) => b.discountCost - a.discountCost);
    }

    return result;
  }, [products, searchTerm, selectedBrand, sortBy]);

  // Show loading spinner while API is fetching
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Show error state with retry button
  if (error) {
    return (
      <div className="error-container">
        <span className="error-icon">⚠️</span>
        <h2>Something went wrong</h2>
        <p>{error}</p>
        <button className="retry-btn" onClick={retryFetch}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <>
      <Maincontent />
      <h2 className="section-title">Most Sold Mobiles</h2>

      <div className="allitems">
        {bestProducts.map((data) => (
          <ItemCard
            key={data.id}
            id={data.id}
            discountPercentage={data.discountPercentage}
            image={data.image}
            itemName={data.itemName}
            rating={data.rating}
            bestseller={data.bestseller}
            discountCost={data.discountCost}
            originalCost={data.originalCost}
            isWishlisted={wishlist.includes(data.id)}
            onAddToCart={() => addToCart(data)}
            onToggleWishlist={() => toggleWishlist(data.id)}
          />
        ))}
      </div>
      <h2 className="section-title">Available Mobiles</h2>
      <SortingBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedBrand={selectedBrand}
        onBrandChange={setSelectedBrand}
        sortBy={sortBy}
        onSortChange={setSortBy}
        brands={allBrands}
      />
      <div className="allitems">
        {filteredProducts.map((datas) => (
          <ItemCard
            key={datas.id}
            id={datas.id}
            discountPercentage={datas.discountPercentage}
            image={datas.image}
            itemName={datas.itemName}
            rating={datas.rating}
            bestseller={datas.bestseller}
            discountCost={datas.discountCost}
            originalCost={datas.originalCost}
            isWishlisted={wishlist.includes(datas.id)}
            onAddToCart={() => addToCart(datas)}
            onToggleWishlist={() => toggleWishlist(datas.id)}
          />
        ))}
      </div>
    </>
  );
}
