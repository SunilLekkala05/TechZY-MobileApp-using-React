import ItemCard from "./Itemcard.jsx";

export default function WishlistPage({
  wishlistItems,
  wishlist,
  onToggleWishlist,
  onAddToCart,
  onGoHome,
}) {
  return (
    <div className="wishlist-page">
      {/* Back button */}
      <button className="wishlist-back-btn" onClick={onGoHome}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Back to Home
      </button>

      <h2 className="wishlist-title">
        ❤️ My Wishlist
        <span className="wishlist-count-badge">{wishlistItems.length}</span>
      </h2>

      {wishlistItems.length > 0 ? (
        <div className="allitems wishlist-grid">
          {wishlistItems.map((data) => (
            <ItemCard
              key={"wish-" + data.id}
              id={data.id}
              discountPercentage={data.discountPercentage}
              image={data.image}
              itemName={data.itemName}
              rating={data.rating}
              bestseller={data.bestseller}
              discountCost={data.discountCost}
              originalCost={data.originalCost}
              isWishlisted={wishlist.includes(data.id)}
              onAddToCart={() => onAddToCart(data)}
              onToggleWishlist={() => onToggleWishlist(data.id)}
            />
          ))}
        </div>
      ) : (
        <div className="wishlist-empty">
          <div className="wishlist-empty-icon">💔</div>
          <h3>Your wishlist is empty</h3>
          <p>Tap the 🤍 on any product to save it here</p>
          <button className="wishlist-shop-btn" onClick={onGoHome}>
            Browse Products
          </button>
        </div>
      )}
    </div>
  );
}
