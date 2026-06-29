// 6th Component - Theme Toggle (Desktop dark/light mode switch button)
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDarkMode ? "☀️" : "🌙"}
    </button>
  );
}
