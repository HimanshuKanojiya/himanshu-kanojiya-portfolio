import React, { useState } from "react";
import menuItems from "../../../assets/jsons/menuItems.json";
import { HamburgerCloseIcon } from "../../../assets/icons/iconsList";
import { SideBarMenuContainer } from "../../styles/SidebarMenu/SideBarMenuContainer";

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
      <div className="hamburgerNav">
        <button
          className="hamburgerMenuIcon"
          onClick={toggleHamburgerMenu}
          onKeyDown={toggleHamburgerMenu}
          tabIndex={0}
        >
          <img src={HamburgerCloseIcon} alt="menu-less" />
        </button>
      </div>
      <nav className="sideBarMenu">
        <ul>
          {navMenuItems.map((navMenu) => {
            return (
              <li className="sidebarMenuItem" key={navMenu.id}>
                <a
                  className={
                    currentJumpId === navMenu.jumpId ? "activeLink" : ""
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
