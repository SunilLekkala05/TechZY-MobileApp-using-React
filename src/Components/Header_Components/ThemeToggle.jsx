// 6th Component - Theme Toggle (Desktop dark/light mode switch button)
export default function ThemeToggle({ isDarkMode, onToggleTheme }) {
  return (
    <button
      className="theme-toggle"
      onClick={onToggleTheme}
      title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDarkMode ? "☀️" : "🌙"}
    </button>
  );
}
