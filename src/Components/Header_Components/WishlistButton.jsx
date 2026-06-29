// 7th Component - Wishlist Button (Heart icon with badge count)
export default function WishlistButton({ wishlistCount, onWishlistClick }) {
  return (
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
  );
}
