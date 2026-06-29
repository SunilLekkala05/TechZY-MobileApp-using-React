import { useState } from "react";

import Logo from "./Header_Components/Logo";
import HamburgerButton from "./Header_Components/HamburgerButton";
import NavLinks from "./Header_Components/NavLinks";
import ThemeToggle from "./Header_Components/ThemeToggle";
import WishlistButton from "./Header_Components/WishlistButton";
import CartButton from "./Header_Components/CartButton";
import ActionLinks from "./Header_Components/ActionLinks";

export default function Header({
  cartCount,
  onCartClick,
  isDarkMode,
  onToggleTheme,
  onWishlistClick,
  wishlistCount,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="header">
      <Logo />

      <HamburgerButton
        isOpen={isMobileMenuOpen}
        onToggle={() => setIsMobileMenuOpen((prev) => !prev)}
      />

      <NavLinks
        isOpen={isMobileMenuOpen}
        onCloseMenu={closeMenu}
        isDarkMode={isDarkMode}
        onToggleTheme={onToggleTheme}
      />

      <div className="login">
        <ThemeToggle isDarkMode={isDarkMode} onToggleTheme={onToggleTheme} />
        <WishlistButton wishlistCount={wishlistCount} onWishlistClick={onWishlistClick} />
        <CartButton cartCount={cartCount} onCartClick={onCartClick} />
        <ActionLinks />
      </div>
    </nav>
  );
}
