import React, { useState } from "react";
import { HamburgerIcon } from "../../../assets/icons/iconsList";
import { NavBarContainer } from "../../styles/NavBar/NavBarContainer";
import { MenuOverlay } from "../MenuOverlay/MenuOverlay";

export const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenu] = useState<boolean>(false);

  const toggleHamburgerMenuHandler = () => {
    setMobileMenu((prevState) => !prevState);
  };

  return (
    <NavBarContainer>
      <h3 className="outerLogo" tabIndex={0}>
        HKAN<span className="innerLogo">OJIYA</span>
      </h3>

      <button
        className="hamburgerMenuIcon"
        onClick={toggleHamburgerMenuHandler}
        onKeyDown={toggleHamburgerMenuHandler}
        tabIndex={0}
      >
        <img src={HamburgerIcon} alt="menu-extend" />
      </button>

      <MenuOverlay
        showMenuOverlay={isMobileMenuOpen}
        toggleHamburgerMenu={toggleHamburgerMenuHandler}
      />
    </NavBarContainer>
  );
};
