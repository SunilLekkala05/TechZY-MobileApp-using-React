import ItemCard from "./Components/Itemcard.jsx";
import Header from "./Components/Header.jsx";
import Maincontent from "./Components/Maincontent.jsx";
import CartSidebar from "./Components/CartSidebar.jsx";
import Footer from "./Components/Footer.jsx";
import WishlistPage from "./Components/WishlistPage.jsx";
import products from "./Components/products.js";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  // Extract unique brands from products
  const allBrands = [...new Set(products.map((p) => p.brand))];

  // ── State ──────────────────────────────────────────────
  // Cart - array of products in cart
  const [cartItems, setCartItems] = useState([]);

  // Wishlist - array of product IDs that are wishlisted
  const [wishlist, setWishlist] = useState([]);

  // Search - what user types in search box
  const [searchTerm, setSearchTerm] = useState("");

  // Brand Filter - which brand is selected (`All` means show all)
  const [selectedBrand, setSelectedBrand] = useState("All");

  // Sort - how to sort products
  const [sortBy, setSortBy] = useState("default");

  // Cart Sidebar - open/close
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Theme - dark/light mode (default dark)
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Page navigation - "home" or "wishlist"
  const [currentPage, setCurrentPage] = useState("home");

  // Apply theme to body element
  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // ── Cart Functions ─────────────────────────────────────
  function addToCart(product) {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  // Increment quantity
  function incrementItem(productId) {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  }

  // Decrement quantity (remove if quantity becomes 0)
  function decrementItem(productId) {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  // Remove item entirely
  function removeItem(productId) {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  }

  // Calculate Total number of Cart items
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  // Calculate Total Price
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.discountCost * item.quantity,
    0,
  );

  // ── Wishlist Function ──────────────────────────────────
  function toggleWishlist(productID) {
    if (wishlist.includes(productID)) {
      setWishlist(wishlist.filter((id) => id !== productID));
    } else {
      setWishlist([...wishlist, productID]);
    }
  }

  // Get full product objects for wishlisted IDs
  const wishlistItems = products.filter((p) => wishlist.includes(p.id));

  // ── Filter & Sort Logic ────────────────────────────────
  // Step 1: Filter by search term (matches item name)
  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.item
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesBrand =
      selectedBrand === "All" || product.brand === selectedBrand;

    return matchesSearch && matchesBrand;
  });

  // Step 2: Sort the filtered products
  if (sortBy === "priceLowToHigh") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.discountCost - b.discountCost,
    );
  } else if (sortBy === "priceHighToLow") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.discountCost - a.discountCost,
    );
  } else if (sortBy === "ratingHighToLow") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.rating - a.rating,
    );
  } else if (sortBy === "discountHighToLow") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.discount - a.discount,
    );
  }

  return (
    <>
      <Header
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        onWishlistClick={() => {
          setCurrentPage("wishlist");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        wishlistCount={wishlist.length}
      />

      {/* ── Cart Sidebar (always available) ── */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        cartTotal={cartTotal}
        onIncrement={incrementItem}
        onDecrement={decrementItem}
        onRemove={removeItem}
      />

      {currentPage === "wishlist" ? (
        /* ── Wishlist Page ── */
        <>
          <WishlistPage
            wishlistItems={wishlistItems}
            wishlist={wishlist}
            onToggleWishlist={toggleWishlist}
            onAddToCart={addToCart}
            onGoHome={() => {
              setCurrentPage("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
          <Footer />
        </>
      ) : (
        /* ── Home Page ── */
        <>
          <Maincontent />

          {/* ── Best Sellers Section ── */}
          <h2 className="section-title" id="deals">🔥 Most Sold Mobiles</h2>
          <div className="allitems">
            {products
              .filter((data) => data.bestseller === "BestSeller")
              .map((data) => (
                <ItemCard
                  key={"best-" + data.id}
                  id={data.id}
                  discount={data.discount}
                  image={data.image}
                  item={data.item}
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

          {/* ── Controls: Search, Brand Filter, Sort ── */}
          <h2 className="section-title" id="products">📱 Available Mobiles</h2>

          <div className="controls-bar">
            {/* Search */}
            <div className="control-group">
              <input
                id="search-input"
                type="text"
                placeholder="🔍 Search mobiles..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Brand Filter */}
            <div className="control-group">
              <select
                id="brand-filter"
                className="filter-select"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                <option value="All">All Brands</option>
                {allBrands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="control-group">
              <select
                id="sort-select"
                className="filter-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Sort By</option>
                <option value="priceLowToHigh">Price: Low → High</option>
                <option value="priceHighToLow">Price: High → Low</option>
                <option value="ratingHighToLow">Rating: High → Low</option>
                <option value="discountHighToLow">Discount: High → Low</option>
              </select>
            </div>
          </div>

          {/* ── Products Grid ── */}
          {filteredProducts.length > 0 ? (
            <div className="allitems">
              {filteredProducts.map((datas) => (
                <ItemCard
                  key={datas.id}
                  id={datas.id}
                  discount={datas.discount}
                  image={datas.image}
                  item={datas.item}
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
          ) : (
            <div className="no-results">
              <p>😕 No products found matching your criteria.</p>
              <button
                className="reset-btn"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedBrand("All");
                  setSortBy("default");
                }}
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* ── Footer ── */}
          <Footer />
        </>
      )}

      {/* ── Cart Summary (sticky bottom bar) ── */}
      {cartCount > 0 && (
        <div
          className="cart-summary-bar"
          onClick={() => setIsCartOpen(true)}
          style={{ cursor: "pointer" }}
        >
          <div className="cart-summary-content">
            <span className="cart-summary-count">
              🛒 {cartCount} item{cartCount > 1 ? "s" : ""} in cart
            </span>
            <span className="cart-summary-total">
              Total: ₹{cartTotal.toFixed(2)}
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
