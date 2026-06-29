// 4th Component - Sidebar Footer (Cart total and checkout button)
export default function SidebarFooter({ cartTotal }) {
  return (
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
  );
}
