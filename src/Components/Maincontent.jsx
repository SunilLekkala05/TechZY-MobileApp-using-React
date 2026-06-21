import background from "../assets/background.png";

export default function MainContent() {
  return (
    <div className="content" style={{ backgroundImage: `url(${background})` }}>
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to TECHZY</h1>
          <p>
            Discover the latest smartphones, unbeatable deals, and premium
            accessories all in one place.
          </p>

          <div className="hero-features">
            <span>🚚 Free Delivery</span>
            <span>🔒 Secure Payments</span>
            <span>🎁 Exclusive Deals</span>
            <span>⭐ Trusted Store</span>
          </div>

          <a href="#products" className="hero-btn">Explore Products</a>
        </div>
      </div>
    </div>
  );
}
