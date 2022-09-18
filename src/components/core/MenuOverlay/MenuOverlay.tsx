import React from "react";
import { createPortal } from "react-dom";
import { MenuOverlayContainer } from "../../styles/Overlays/MenuOverlayContainer";
import { SideBarMenu } from "../SiderBarMenu/SideBarMenu";

export const MenuOverlay: React.FC<IMenuOverlay> = ({
  showMenuOverlay,
  toggleHamburgerMenu,
}) => {
  return (
    <>
      {showMenuOverlay &&
        createPortal(
          <MenuOverlayContainer />,
          document.getElementById("overlay-background") as HTMLElement
        )}

      {showMenuOverlay &&
        createPortal(
          <SideBarMenu toggleHamburgerMenu={toggleHamburgerMenu} />,
          document.getElementById("overlay-root") as HTMLElement
        )}
    </>
  );
};
