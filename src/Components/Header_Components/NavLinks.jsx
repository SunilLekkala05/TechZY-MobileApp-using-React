// 3rd Component - NavLinks (Navigation links list with mobile sub-components)
import MobileThemeToggle from "./MobileThemeToggle";
import MobileMenuActions from "./MobileMenuActions";

const NAV_ITEMS = [
  { label: "Products", href: "#products" },
  { label: "Deals", href: "#deals" },
  { label: "Support", href: "#contact" },
  { label: "About", href: "#contact" },
];

export default function NavLinks({
  isOpen,
  onCloseMenu,
  isDarkMode,
  onToggleTheme,
}) {
  return (
    <ul className={`view_items ${isOpen ? "mobile-open" : ""}`}>
      {NAV_ITEMS.map(({ label, href }) => (
        <li key={label}>
          <a href={href} onClick={onCloseMenu}>
            {label}
          </a>
        </li>
      ))}

      {/* Mobile-only items */}
      <MobileThemeToggle isDarkMode={isDarkMode} onToggleTheme={onToggleTheme} />
      <MobileMenuActions onCloseMenu={onCloseMenu} />
    </ul>
  );
}
