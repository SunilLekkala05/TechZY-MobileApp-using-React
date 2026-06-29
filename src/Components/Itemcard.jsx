import DiscountBadge from "./Itemcard_Components/DiscountBadge";
import WishlistToggle from "./Itemcard_Components/WishlistToggle";
import ProductImage from "./Itemcard_Components/ProductImage";
import ProductDetails from "./Itemcard_Components/ProductDetails";

export default function ItemCard({
  id,
  discountPercentage,
  image,
  itemName,
  rating,
  bestseller,
  discountCost,
  originalCost,
  isWishlisted,
  onAddToCart,
  onToggleWishlist,
}) {
  return (
    <div className="item">
      <DiscountBadge percentage={discountPercentage} />
      <WishlistToggle isWishlisted={isWishlisted} onToggleWishlist={onToggleWishlist} />
      <ProductImage image={image} itemName={itemName} />
      <ProductDetails
        itemName={itemName}
        rating={rating}
        bestseller={bestseller}
        discountCost={discountCost}
        originalCost={originalCost}
        discountPercentage={discountPercentage}
        onAddToCart={onAddToCart}
      />
    </div>
  );
}
