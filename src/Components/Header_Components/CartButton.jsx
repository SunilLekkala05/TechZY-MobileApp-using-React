// 8th Component - Cart Button (Cart icon with badge count)
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export default function CartButton() {
  const { cartCount } = useContext(CartContext);

  return (
    <a
      href="#"
      className="cart-link"
      onClick={(e) => {
        e.preventDefault();
        // Dispatch a custom event to toggle the cart sidebar
        window.dispatchEvent(new CustomEvent("toggle-cart"));
      }}
    >
      🛒 {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
    </a>
  );
}
