import React, { useState } from "react";

import { SideBarMenuContainer } from "../../styles/SidebarMenu/SideBarMenuContainer";

import menuItems from "../../../assets/jsons/menuItems.json";
import { HamburgerCloseIcon } from "../../../assets/icons/iconsList";

export const SideBarMenu: React.FC<ISideBarMenu> = ({
  toggleHamburgerMenu,
}) => {
  const [currentJumpId, setJumpId] = useState<string>("");
  const { navMenuItems } = menuItems;

  const jumpToContent = (
    event:
      | React.MouseEvent<HTMLAnchorElement>
      | React.KeyboardEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    setJumpId(event.currentTarget.text);
  };

  return (
    <SideBarMenuContainer>
      <div className="hamburger-nav">
        <button
          className="hamburger-menu-icon"
          onClick={toggleHamburgerMenu}
          onKeyDown={toggleHamburgerMenu}
          tabIndex={0}
        >
          <img src={HamburgerCloseIcon} alt="menu-less" />
        </button>
      </div>
      <nav className="sidebar-menu">
        <ul>
          {navMenuItems.map((navMenu) => {
            return (
              <li className="sidebar-menu-item" key={navMenu.id}>
                <a
                  className={
                    currentJumpId === navMenu.jumpId ? "active-link" : ""
                  }
                  href={navMenu.jumpId}
                  onClick={jumpToContent}
                  onKeyDown={jumpToContent}
                  tabIndex={0}
                >
                  {navMenu.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </SideBarMenuContainer>
  );
};
