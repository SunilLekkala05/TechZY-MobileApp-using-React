// 3rd Component - Wishlist Empty State (Shown when wishlist has no items)
import { Link } from "react-router-dom";

export default function WishlistEmpty() {
  return (
    <div className="wishlist-empty">
      <div className="wishlist-empty-icon">💔</div>
      <h3>Your wishlist is empty</h3>
      <p>Tap the 🤍 on any product to save it here</p>
      <Link to="/" className="wishlist-shop-btn">
        Browse Products
      </Link>
    </div>
  );
}
