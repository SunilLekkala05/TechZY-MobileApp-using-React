// 1st Component - Hero Features (Feature badges like Free Delivery, Secure Payments)
const FEATURES = [
  "🚚 Free Delivery",
  "🔒 Secure Payments",
  "🎁 Exclusive Deals",
  "⭐ Trusted Store",
];

export default function HeroFeatures() {
  return (
    <div className="hero-features">
      {FEATURES.map((feature) => (
        <span key={feature}>{feature}</span>
      ))}
    </div>
  );
}
