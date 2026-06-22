import ItemCard from "./Components/Itemcard.jsx";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import CartSidebar from "./Components/CartSidebar.jsx";
import WishlistPage from "./Components/WishlistPage.jsx";
import Maincontent from "./Components/Maincontent.jsx";
import products from "./Components/products.js";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  //BRANDS
  const allBrands = [...new Set(products.map((p) => p.brand))];

  //State
  //Cart - array of products in cart
  const [cartItems, setCartItems] = useState([]);

  //Wishlist - array of product IDs that are wishlisted
  const [wishlist, setWishlist] = useState([]);

  //Search - what user types in search box
  const [searchTerm, setSearchTerm] = useState("");

  //Brand Filter - which brand is selected (`All` means show all)
  const [selectedBrand, setSelectedBrand] = useState("All");

  //Sort - how to sort products
  const [sortBy, setSortBy] = useState([]);

  //Cart sidebar open/close
  const [isCartOpen, setIsCartOpen] = useState(false);

  //Wishlist page visibility
  const [showWishlistPage, setShowWishlistPage] = useState(false);

  //Dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Sync theme to body attribute so CSS variables apply
  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  function addToCart(product) {
    //Check if Cart Item Exists
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      //Product is there in the cart
      setCartItems(
        cartItems.map(
          (
            item, // [Array of objects]
          ) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
        ),
      );
    } else {
      //Product not there
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  //Increment cart item quantity
  function incrementItem(id) {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  //Decrement cart item quantity
  function decrementItem(id) {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  //Remove cart item entirely
  function removeItem(id) {
    setCartItems(cartItems.filter((item) => item.id !== id));
  }

  //Calculate Total number of Cart items
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  //Calculate Total Price
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.discountCost * item.quantity,
    0,
  );

  //Wishlist function
  function toggleWishlist(productID) {
    if (wishlist.includes(productID)) {
      //Already Existing - Remove It
      setWishlist(wishlist.filter((id) => id !== productID));
    } else {
      //Not in the wishlist - just add it
      setWishlist([...wishlist, productID]);
    }
  }

  //Best-selling products (those with `bestseller` property set)
  const bestProducts = products.filter((p) => p.bestseller);

  //Wishlist items (full product objects)
  const wishlistItems = products.filter((p) => wishlist.includes(p.id));

  //Step1 : Filter based on search [Based on brand]
  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.brand
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesSearch;
  });

  //Step2 : Sort based on filtered products

  //If wishlist page is open, show that instead
  if (showWishlistPage) {
    return (
      <>
        <Header
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
          isDarkMode={isDarkMode}
          onToggleTheme={() => setIsDarkMode(!isDarkMode)}
          onWishlistClick={() => setShowWishlistPage(true)}
          wishlistCount={wishlist.length}
        />
        <WishlistPage
          wishlistItems={wishlistItems}
          wishlist={wishlist}
          onToggleWishlist={toggleWishlist}
          onAddToCart={addToCart}
          onGoHome={() => setShowWishlistPage(false)}
        />
        <CartSidebar
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          cartTotal={cartTotal}
          onIncrement={incrementItem}
          onDecrement={decrementItem}
          onRemove={removeItem}
        />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        onWishlistClick={() => setShowWishlistPage(true)}
        wishlistCount={wishlist.length}
      />
      <Maincontent />
      <h2 className="section-title">Most Sold Mobiles</h2>

      <div className="allitems">
        {bestProducts.map((data) => (
          <ItemCard
            key={data.id}
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
      <h2 className="section-title">Available Mobiles</h2>
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
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        cartTotal={cartTotal}
        onIncrement={incrementItem}
        onDecrement={decrementItem}
        onRemove={removeItem}
      />
      <Footer />
    </>
  );
}

export default App;
