import logo from "../assets/logo.png";

export default function Header({
  cartCount,
  onCartClick,
  isDarkMode,
  onToggleTheme,
  onWishlistClick,
  wishlistCount,
}) {
  return (
    <nav className="header">
      <div className="title">
        <img src={logo} alt="Techzy Logo" width="100" />
      </div>

      <ul className="view_items">
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#deals">Deals</a>
        </li>
        <li>
          <a href="#contact">Support</a>
        </li>
        <li>
          <a href="#contact">About</a>
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
