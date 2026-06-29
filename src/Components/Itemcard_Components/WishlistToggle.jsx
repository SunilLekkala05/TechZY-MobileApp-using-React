// 2nd Component - Wishlist Toggle (Heart button on product card)
export default function WishlistToggle({ isWishlisted, onToggleWishlist }) {
  return (
    <button
      className={`wishlisted${isWishlisted ? " active" : ""}`}
      onClick={onToggleWishlist}
    >
      {isWishlisted ? "❤️" : "🤍"}
    </button>
  );
}
