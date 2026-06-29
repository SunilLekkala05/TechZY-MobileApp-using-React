// 1st Component - Sidebar Overlay (Dark background behind cart sidebar)
export default function SidebarOverlay({ isOpen, onClose }) {
  return (
    <div
      className={`sidebar-overlay ${isOpen ? "active" : ""}`}
      onClick={onClose}
    />
  );
}
