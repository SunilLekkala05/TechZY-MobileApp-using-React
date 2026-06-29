// 4th Component - Mobile Theme Toggle (Light/Dark mode switch inside mobile menu)
export default function MobileThemeToggle({ isDarkMode, onToggleTheme }) {
  return (
    <li className="mobile-theme-toggle">
      <button onClick={onToggleTheme} className="mobile-theme-btn">
        {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </li>
  );
}
