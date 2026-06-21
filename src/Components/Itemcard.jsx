export default function ItemCard({
  id,
  discount,
  image,
  item,
  rating,
  bestseller,
  discountCost,
  originalCost,
  isWishlisted,
  onAddToCart,
  onToggleWishlist,
}) {
  // Calculate originalCost if not provided
  // Formula: originalCost = (discountCost / (100 - discount)) * 100
  const calculatedOriginalCost =
    originalCost || Math.round(((discountCost * 100) / (100 - discount)) * 100) / 100;

  return (
    <div className="item">
      <div className="discount">{discount}% OFF</div>
      <button
        className={`wishlisted ${isWishlisted ? "active" : ""}`}
        onClick={onToggleWishlist}
      >
        {isWishlisted ? "❤️" : "🤍"}
      </button>
      <div className="item_img">
        <img src={image} alt="image not found" />
      </div>

      <div className="description">
        <h2 className="item_name">{item}</h2>
        <div className="review">
          <p className="rating">
            {Array.from({ length: 5 }, (_, i) => {
              if (i < Math.floor(rating)) {
                return <span key={i} className="star filled">★</span>;
              } else if (i < rating) {
                return (
                  <span key={i} className="star half-star">
                    <span className="star-empty">★</span>
                    <span className="star-filled-half">★</span>
                  </span>
                );
              } else {
                return <span key={i} className="star empty">☆</span>;
              }
            })}
            <span className="rating-number">{rating}</span>
          </p>
          <p className="bestsell">{bestseller}</p>
        </div>
        <div className="cost">
          <div className="cost">
            <h2 className="discount-price">₹ {discountCost}/-</h2>
            <h3 className="original-price">₹ {calculatedOriginalCost}/-</h3>
          </div>
        </div>
        <div className="addcard">
          <button className="cart" onClick={onAddToCart}>
            ADD CART
          </button>
        </div>
      </div>
    </div>
  );
}
