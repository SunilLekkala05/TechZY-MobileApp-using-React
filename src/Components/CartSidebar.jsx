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
      {/* Dark overlay behind sidebar */}
      <div
        className={`sidebar-overlay ${isOpen ? "active" : ""}`}
        onClick={onClose}
      />

      {/* Sidebar panel */}
      <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
        {/* Header */}
        <div className="sidebar-header">
          <h2 className="sidebar-title">🛒 Your Cart</h2>
          <button className="sidebar-close" onClick={onClose}>
            ✕
          </button>
        </div>

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
              <div className="sidebar-item" key={item.id}>
                <div className="sidebar-item-img">
                  <img src={item.image} alt={item.itemName} />
                </div>
                <div className="sidebar-item-details">
                  <p className="sidebar-item-name">{item.itemName}</p>
                  <p className="sidebar-item-price">
                    ₹{item.discountCost.toLocaleString("en-IN")}
                  </p>
                  <div className="sidebar-qty-controls">
                    <button
                      className="qty-btn"
                      onClick={() => onDecrement(item.id)}
                    >
                      −
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => onIncrement(item.id)}
                    >
                      +
                    </button>
                    <button
                      className="qty-remove"
                      onClick={() => onRemove(item.id)}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with total */}
        {cartItems.length > 0 && (
          <div className="sidebar-footer">
            <div className="sidebar-total-row">
              <span className="sidebar-total-label">Total</span>
              <span className="sidebar-total-amount">
                ₹{cartTotal.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
              </span>
            </div>
            <button className="sidebar-checkout-btn">
              Proceed to Checkout →
            </button>
          </div>
        )}
      </div>
    </>
  );
}
