// 2nd Component - Wishlist Header (Title with item count badge)
export default function WishlistHeader({ count }) {
  return (
    <h2 className="wishlist-title">
      ❤️ My Wishlist
      <span className="wishlist-count-badge">{count}</span>
    </h2>
  );
}
