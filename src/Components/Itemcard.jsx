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
            {"★".repeat(Math.floor(rating))}
            {"☆".repeat(Math.floor(5 - rating))}
            {rating}
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
