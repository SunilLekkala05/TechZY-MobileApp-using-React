// 3rd Component - Sidebar Item (Single cart item with image, price, qty controls)
export default function SidebarItem({ item, onIncrement, onDecrement, onRemove }) {
  return (
    <div className="sidebar-item">
      <div className="sidebar-item-img">
        <img src={item.image} alt={item.itemName} />
      </div>
      <div className="sidebar-item-details">
        <p className="sidebar-item-name">{item.itemName}</p>
        <p className="sidebar-item-price">
          ₹{item.discountCost.toLocaleString("en-IN")}
        </p>
        <div className="sidebar-qty-controls">
          <button className="qty-btn" onClick={() => onDecrement(item.id)}>
            −
          </button>
          <span className="qty-value">{item.quantity}</span>
          <button className="qty-btn" onClick={() => onIncrement(item.id)}>
            +
          </button>
          <button className="qty-remove" onClick={() => onRemove(item.id)}>
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}
