import ItemCard from "./Components/Itemcard.jsx";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import CartSidebar from "./Components/CartSidebar.jsx";
import WishlistPage from "./Components/WishlistPage.jsx";
import Maincontent from "./Components/Maincontent.jsx";
import SortingBar from "./Components/SortingBar.jsx";
import products from "./Components/products.js";
import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  //BRANDS
  const allBrands = [...new Set(products.map((p) => p.brand))];

  const topRef = useRef(null);

  function scrollToTop() {
    topRef.current.scrollIntoView();
  }


  //State
  //Cart - array of products in cart
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("techstore-cart");

    if (savedCart) //true
    {
      try {
        return JSON.parse(savedCart);
      } catch (error) {
        console.error("Error parsing cart from localStorage", error);
        return [];
      }
    }
    return [];
  });


  useEffect(() => {
    localStorage.setItem("techstore-cart", JSON.stringify(cartItems));
  }, [cartItems]);


  //Wishlist - array of product IDs that are wishlisted
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

  useEffect(() => {
    localStorage.setItem("tec hstore-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);


  //Search - what user types in search box
  const [searchTerm, setSearchTerm] = useState("");

  //Brand Filter - which brand is selected (`All` means show all)
  const [selectedBrand, setSelectedBrand] = useState("All");

  //Sort - how to sort products
  const [sortBy, setSortBy] = useState("");

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

  //Step1 : Filter based on search + brand dropdown
  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.brand
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesBrand =
      selectedBrand === "All" || product.brand === selectedBrand;

    return matchesSearch && matchesBrand;
  });

  //Step2 : Sort based on filtered products
  if (sortBy === "rating-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "rating-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.rating - b.rating);
  } else if (sortBy === "discount-high") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.discountPercentage - a.discountPercentage,
    );
  } else if (sortBy === "discount-low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.discountPercentage - b.discountPercentage,
    );
  } else if (sortBy === "price-low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.discountCost - b.discountCost,
    );
  } else if (sortBy === "price-high") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.discountCost - a.discountCost,
    );
  }

  //If wishlist page is open, show that instead
  if (showWishlistPage) {
    return (
      <>
        <div ref={topRef}></div>
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
        <Footer onScrollToTop={scrollToTop} />
      </>
    );
  }

  return (
    <>
      <div ref={topRef}></div>
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
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        cartTotal={cartTotal}
        onIncrement={incrementItem}
        onDecrement={decrementItem}
        onRemove={removeItem}
      />
      <Footer onScrollToTop={scrollToTop} />
    </>
  );
}

export default App;
