import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import Logo from "./Header_Components/Logo";
import HamburgerButton from "./Header_Components/HamburgerButton";
import NavLinks from "./Header_Components/NavLinks";
import ThemeToggle from "./Header_Components/ThemeToggle";
import WishlistButton from "./Header_Components/WishlistButton";
import CartButton from "./Header_Components/CartButton";
import ActionLinks from "./Header_Components/ActionLinks";
import UserName from "./Header_Components/UserName";

import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext";
import { ThemeContext } from "../Context/ThemeContext";

export default function Header() {
  const { cartCount } = useContext(CartContext);
  const { wishlistCount } = useContext(WishlistContext);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
      />

      <div className="login">
        <ThemeToggle />
        <WishlistButton />
        <CartButton />
        <ActionLinks />
        <UserName />
      </div>
    </nav>
  );
}
