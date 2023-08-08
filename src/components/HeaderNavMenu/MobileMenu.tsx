import { FC, Children, useState } from "react";
import Link from "next/link";

import { IoCloseOutline } from "react-icons/io5";

import { MobileMenuContainer } from "./styles/HeaderNavContainer";

import { SocialIcons } from "@components/SocialIcons";
import { ContactUsButton } from "@components/Buttons/ContactUsButton";

const headNavigationMenu = [
  {
    id: "#aboutme",
    value: "ABOUT ME",
  },
  {
    id: "#experience",
    value: "EXPERIENCE",
  },
  {
    id: "#projects",
    value: "PROJECTS",
  },
  {
    id: "#blogs",
    value: "BLOGS",
  },
];

export const MobileMenu: FC<IMobileMenu> = ({
  onClickToClose,
  onClickTotoggleMenuItem,
  activeMenuItem,
}) => {
  return (
    <MobileMenuContainer>
      <button className="close-hamburger-menu" onClick={onClickToClose}>
        <IoCloseOutline width={40} height={40} color="#2ff2f0" />
      </button>

      <ul className="menu">
        {Children.toArray(
          headNavigationMenu.map((navItem) => {
            return (
              <li
                className={`menu-item ${
                  activeMenuItem === navItem.id ? "active-link" : ""
                }`}
              >
                <Link
                  href={navItem.id}
                  onClick={() => onClickTotoggleMenuItem(navItem.id)}
                >
                  {navItem.value}
                </Link>
              </li>
            );
          })
        )}
        <li className="menu-item">
          <SocialIcons
            type="github"
            value="himanshu kanojiya github link"
            link="/"
          />
          <SocialIcons
            type="linkedIn"
            value="himanshu kanojiya linkedIn link"
            link="/"
          />
        </li>
        <li>
          <ContactUsButton />
        </li>
      </ul>
    </MobileMenuContainer>
  );
};
