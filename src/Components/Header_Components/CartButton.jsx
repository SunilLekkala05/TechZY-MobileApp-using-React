// 8th Component - Cart Button (Cart icon with badge count)
export default function CartButton({ cartCount, onCartClick }) {
  return (
    <a
      href="#"
      className="cart-link"
      onClick={(e) => {
        e.preventDefault();
        onCartClick();
      }}
    >
      🛒 {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
    </a>
  );
}
