import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext";
import ItemCard from "./Itemcard.jsx";
import WishlistBackButton from "./WishlistPage_Components/WishlistBackButton";
import WishlistHeader from "./WishlistPage_Components/WishlistHeader";
import WishlistEmpty from "./WishlistPage_Components/WishlistEmpty";

export default function WishlistPage() {
  const { wishlistItems, wishlist, toggleWishlist } =
    useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="wishlist-page">
      <WishlistBackButton />
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
              onAddToCart={() => addToCart(data)}
              onToggleWishlist={() => toggleWishlist(data.id)}
            />
          ))}
        </div>
      ) : (
        <WishlistEmpty />
      )}
    </div>
  );
}
