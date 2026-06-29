// App.jsx — Thin routing shell with shared Layout
// All state lives in Context providers; App just handles routing and layout
import { useRef, useContext } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import CartSidebar from "./Components/CartSidebar.jsx";
import HomePage from "./Pages/HomePage.jsx";
import WishlistPage from "./Components/WishlistPage.jsx";
import "./App.css";

// Shared Layout — renders Header, CartSidebar, Footer once for all routes
function Layout() {
  const topRef = useRef(null);

  function scrollToTop() {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div ref={topRef}></div>
      <Header />
      <Outlet />
      <CartSidebar />
      <Footer onScrollToTop={scrollToTop} />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Route>
    </Routes>
  );
}

export default App;
