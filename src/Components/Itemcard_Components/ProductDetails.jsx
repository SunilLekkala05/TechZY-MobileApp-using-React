// 4th Component - Product Details (Name, rating, price, and add-to-cart button)
export default function ProductDetails({
  itemName,
  rating,
  bestseller,
  discountCost,
  originalCost,
  discountPercentage,
  onAddToCart,
}) {
  // Calculate originalCost if not provided
  const calculatedOriginalCost =
    originalCost ||
    Math.round(((discountCost * 100) / (100 - discountPercentage)) * 100) / 100;

  return (
    <div className="description">
      <h2 className="item_name">{itemName}</h2>
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
  );
}
