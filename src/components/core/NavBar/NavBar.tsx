import React, { useState } from "react";

import { HamburgerIcon } from "../../../assets/icons/iconsList";
import { NavBarContainer } from "../../styles/NavBar/NavBarContainer";
import { MenuOverlay } from "../MenuOverlay/MenuOverlay";

import { useMediaQuery } from "../../../helper/useMediaQuery";

import menuItems from "../../../assets/jsons/menuItems.json";

export const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenu] = useState<boolean>(false);
  const [currentJumpId, setJumpId] = useState<string>("");
  const isDesktop = useMediaQuery("(min-width: 1336px)");
  const { navMenuItems } = menuItems;

  const toggleHamburgerMenuHandler = () => {
    setMobileMenu((prevState) => !prevState);
  };

  const jumpToContent = (
    event:
      | React.MouseEvent<HTMLAnchorElement>
      | React.KeyboardEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    setJumpId(event.currentTarget.text);
  };

  return (
    <NavBarContainer>
      <h3 className="outer-logo" tabIndex={0}>
        HKAN<span className="inner-logo">OJIYA</span>
      </h3>

      {isDesktop && (
        <div className="desktop-menu">
          <ul>
            {navMenuItems.map((menuItem) => {
              return (
                <li key={menuItem.id}>
                  {menuItem.jumpId !== "Contact Us" && (
                    <a
                      href={menuItem.jumpId}
                      onClick={jumpToContent}
                      onKeyDown={jumpToContent}
                      tabIndex={0}
                      className={
                        currentJumpId === menuItem.jumpId ? "active-link" : ""
                      }
                    >
                      {menuItem.title}
                    </a>
                  )}
                  {menuItem.jumpId === "Contact Us" && (
                    <button tabIndex={0}>{menuItem.title}</button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {!isDesktop && (
        <>
          <button
            className="hamburger-menu-icon"
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
        </>
      )}
    </NavBarContainer>
  );
};
