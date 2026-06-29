// 2nd Component - Hamburger Button (Mobile menu toggle, visible only on small screens)
export default function HamburgerButton({ isOpen, onToggle }) {
  return (
    <button
      className={`hamburger-btn ${isOpen ? "open" : ""}`}
      onClick={onToggle}
      aria-label="Toggle navigation menu"
    >
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
    </button>
  );
}
