// 7th Component - Wishlist Button (Heart icon with badge count, links to /wishlist)
import { useContext } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../Context/WishlistContext";

export default function WishlistButton() {
  const { wishlistCount } = useContext(WishlistContext);

  return (
    <Link to="/wishlist" className="wishlist-link">
      ❤️
      {wishlistCount > 0 && (
        <span className="wishlist-badge">{wishlistCount}</span>
      )}
    </Link>
  );
}
