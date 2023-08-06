import { FC } from "react";
import Link from "next/link";

import { IoCloseOutline } from "react-icons/io5";

import { MobileMenuContainer } from "./styles/HeaderNavContainer";
import { SocialIcons } from "@components/SocialIcons";
import { ContactUsButton } from "@components/Buttons/ContactUsButton";

export const MobileMenu: FC<IMobileMenu> = ({ onClickToClose }) => {
  return (
    <MobileMenuContainer>
      <button className="close-hamburger-menu" onClick={onClickToClose}>
        <IoCloseOutline width={40} height={40} color="#2ff2f0" />
      </button>
      <ul className="menu">
        <li className="menu-item">
          <Link href="/">Experience</Link>
        </li>
        <li className="menu-item">
          <Link href="/">Skills</Link>
        </li>
        <li className="menu-item">
          <Link href="/">Blogs</Link>
        </li>
        <li className="menu-item">
          <Link href="/">Experience</Link>
        </li>
        <li className="menu-item">
          <Link href="/">Projects</Link>
        </li>
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
