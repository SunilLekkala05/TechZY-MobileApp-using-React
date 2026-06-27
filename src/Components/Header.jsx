import { useState } from "react";
import logo from "../assets/logo.png";

export default function Header({
  cartCount,
  onCartClick,
  isDarkMode,
  onToggleTheme,
  onWishlistClick,
  wishlistCount,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="header">
      <div className="title">
        <img src={logo} alt="Techzy Logo" width="100" />
      </div>

      {/* Hamburger button — visible only on small screens */}
      <button
        className={`hamburger-btn ${isMobileMenuOpen ? "open" : ""}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <ul className={`view_items ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <li>
          <a href="#products" onClick={() => setIsMobileMenuOpen(false)}>
            Products
          </a>
        </li>
        <li>
          <a href="#deals" onClick={() => setIsMobileMenuOpen(false)}>
            Deals
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
            Support
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </a>
        </li>
        {/* Theme toggle inside mobile menu */}
        <li className="mobile-theme-toggle">
          <button onClick={onToggleTheme} className="mobile-theme-btn">
            {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </li>
        {/* Sign In & Shop Now inside mobile menu */}
        <li className="mobile-menu-actions">
          <a href="#" className="mobile-signin" onClick={() => setIsMobileMenuOpen(false)}>
            Sign In
          </a>
          <a href="#" className="mobile-shopnow" onClick={() => setIsMobileMenuOpen(false)}>
            Shop Now
          </a>
        </li>
      </ul>

      <div className="login">
        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? "☀️" : "🌙"}
        </button>
        <a
          href="#"
          className="wishlist-link"
          onClick={(e) => {
            e.preventDefault();
            onWishlistClick();
          }}
        >
          ❤️
          {wishlistCount > 0 && (
            <span className="wishlist-badge">{wishlistCount}</span>
          )}
        </a>
        <a
          href="#"
          className="cart-link"
          onClick={(e) => {
            e.preventDefault();
            onCartClick();
          }}
        >
          🛒{" "}
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </a>
        <a href="#" className="signin">
          Sign In
        </a>
        <a href="#" className="shopnow">
          Shop Now
        </a>
      </div>
    </nav>
  );
}
