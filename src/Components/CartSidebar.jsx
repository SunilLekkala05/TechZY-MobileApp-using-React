import SidebarOverlay from "./CartSidebar_Components/SidebarOverlay";
import SidebarHeader from "./CartSidebar_Components/SidebarHeader";
import SidebarItem from "./CartSidebar_Components/SidebarItem";
import SidebarFooter from "./CartSidebar_Components/SidebarFooter";

export default function CartSidebar({
  isOpen,
  onClose,
  cartItems,
  cartTotal,
  onIncrement,
  onDecrement,
  onRemove,
}) {
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
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onRemove={onRemove}
              />
            ))
          )}
        </div>

        {cartItems.length > 0 && <SidebarFooter cartTotal={cartTotal} />}
      </div>
    </>
  );
}
