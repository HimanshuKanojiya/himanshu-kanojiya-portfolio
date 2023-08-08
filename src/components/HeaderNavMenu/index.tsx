import { FC, useState, Children } from "react";
import Link from "next/link";

import { RxHamburgerMenu } from "react-icons/rx";

import { OverlayContainer } from "./styles/OverlayContainer";
import { HeaderNavContainer } from "./styles/HeaderNavContainer";

import { Logo } from "@components/Logo";
import { SocialIcons } from "@components/SocialIcons";
import { MobileMenu } from "./MobileMenu";
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

export const HeaderNavMenu: FC = () => {
  const [currentPathWithHash, setCurrentPathWithHash] = useState<string>("");
  const [showMobileMenu, setMobileMenuVisible] = useState<boolean>(false);

  const onClickTotoggleMenuItem = (id: string) => {
    setCurrentPathWithHash(id);
  };

  return (
    <HeaderNavContainer>
      <Logo />
      <div className="desktop-menu-container">
        <ul className="portfolio-nav-menu-links">
          {Children.toArray(
            headNavigationMenu.map((navItem) => {
              return (
                <li
                  className={
                    currentPathWithHash === navItem.id ? "active-link" : ""
                  }
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
        </ul>

        <ul className="social-media-menu-links">
          <li>
            <SocialIcons
              type="github"
              link="/"
              value="himanshu kanojiya github link"
            />
          </li>
          <li>
            <SocialIcons
              type="linkedIn"
              link="/"
              value="himanshu kanojiya linkedIn link"
            />
          </li>
        </ul>

        <ContactUsButton />
      </div>

      <div className="mobile-menu-container">
        <button
          className="mobile-hamburger-button"
          onClick={() => setMobileMenuVisible((prevState) => !prevState)}
        >
          <RxHamburgerMenu width={40} height={40} color="#2ff2f0" />
        </button>

        {showMobileMenu && (
          <>
            <OverlayContainer />
            <MobileMenu
              onClickToClose={() =>
                setMobileMenuVisible((prevState) => !prevState)
              }
              activeMenuItem={currentPathWithHash}
              onClickTotoggleMenuItem={onClickTotoggleMenuItem}
            />
          </>
        )}
      </div>
    </HeaderNavContainer>
  );
};
