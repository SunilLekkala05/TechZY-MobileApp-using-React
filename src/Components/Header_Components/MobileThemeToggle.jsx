// 4th Component - Mobile Theme Toggle (Light/Dark mode switch inside mobile menu)
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

export default function MobileThemeToggle() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <li className="mobile-theme-toggle">
      <button onClick={toggleTheme} className="mobile-theme-btn">
        {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </li>
  );
}
