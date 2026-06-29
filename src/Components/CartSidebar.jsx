import { useState, useEffect, useContext } from "react";
import { CartContext } from "../Context/CartContext";
import SidebarOverlay from "./CartSidebar_Components/SidebarOverlay";
import SidebarHeader from "./CartSidebar_Components/SidebarHeader";
import SidebarItem from "./CartSidebar_Components/SidebarItem";
import SidebarFooter from "./CartSidebar_Components/SidebarFooter";

export default function CartSidebar() {
  const { cartItems, cartTotal, incrementItem, decrementItem, removeItem } =
    useContext(CartContext);

  // Local state for open/close — toggled via custom event from CartButton
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleToggleCart() {
      setIsOpen((prev) => !prev);
    }

    window.addEventListener("toggle-cart", handleToggleCart);
    return () => window.removeEventListener("toggle-cart", handleToggleCart);
  }, []);

  const onClose = () => setIsOpen(false);

  return (
    <>
      <SidebarOverlay isOpen={isOpen} onClose={onClose} />

      <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
        <SidebarHeader onClose={onClose} />

        {/* Cart items */}
        <div className="sidebar-body">
          {cartItems.length === 0 ? (
            <div className="sidebar-empty">
              <span className="empty-cart-icon">🛒</span>
              <p>Your cart is empty</p>
              <p className="empty-subtext">Add items to get started</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <SidebarItem
                key={item.id}
                item={item}
                onIncrement={incrementItem}
                onDecrement={decrementItem}
                onRemove={removeItem}
              />
            ))
          )}
        </div>

        {cartItems.length > 0 && <SidebarFooter cartTotal={cartTotal} />}
      </div>
    </>
  );
}
