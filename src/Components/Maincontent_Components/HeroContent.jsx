// 2nd Component - Hero Content (Main hero heading, description, and CTA button)
import HeroFeatures from "./HeroFeatures";

export default function HeroContent() {
  return (
    <div className="hero-content">
      <h1>Welcome to TECHZY</h1>
      <p>
        Discover the latest smartphones, unbeatable deals, and premium
        accessories all in one place.
      </p>
      <HeroFeatures />
      <a href="#products" className="hero-btn">Explore Products</a>
    </div>
  );
}
