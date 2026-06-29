// 3rd Component - Wishlist Empty State (Shown when wishlist has no items)
export default function WishlistEmpty({ onGoHome }) {
  return (
    <div className="wishlist-empty">
      <div className="wishlist-empty-icon">💔</div>
      <h3>Your wishlist is empty</h3>
      <p>Tap the 🤍 on any product to save it here</p>
      <button className="wishlist-shop-btn" onClick={onGoHome}>
        Browse Products
      </button>
    </div>
  );
}
