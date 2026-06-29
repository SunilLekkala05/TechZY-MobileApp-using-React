// 2nd Component - Sidebar Header (Cart title and close button)
export default function SidebarHeader({ onClose }) {
  return (
    <div className="sidebar-header">
      <h2 className="sidebar-title">🛒 Your Cart</h2>
      <button className="sidebar-close" onClick={onClose}>
        ✕
      </button>
    </div>
  );
}
