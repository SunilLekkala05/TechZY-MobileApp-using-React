import ItemCard from "./Itemcard.jsx";
import WishlistBackButton from "./WishlistPage_Components/WishlistBackButton";
import WishlistHeader from "./WishlistPage_Components/WishlistHeader";
import WishlistEmpty from "./WishlistPage_Components/WishlistEmpty";

export default function WishlistPage({
  wishlistItems,
  wishlist,
  onToggleWishlist,
  onAddToCart,
  onGoHome,
}) {
  return (
    <div className="wishlist-page">
      <WishlistBackButton onGoHome={onGoHome} />
      <WishlistHeader count={wishlistItems.length} />

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
        <WishlistEmpty onGoHome={onGoHome} />
      )}
    </div>
  );
}
