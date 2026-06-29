// 5th Component - Mobile Menu Actions (Sign In & Shop Now links in mobile menu)
export default function MobileMenuActions({ onCloseMenu }) {
  return (
    <li className="mobile-menu-actions">
      <a href="#" className="mobile-signin" onClick={onCloseMenu}>
        Sign In
      </a>
      <a href="#" className="mobile-shopnow" onClick={onCloseMenu}>
        Shop Now
      </a>
    </li>
  );
}
