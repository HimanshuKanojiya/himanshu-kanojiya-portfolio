import { FC, useState } from "react";
import Link from "next/link";

import { RxHamburgerMenu } from "react-icons/rx";

import { HeaderNavContainer } from "./styles/HeaderNavContainer";
import { Logo } from "@components/Logo";
import { SocialIcons } from "@components/SocialIcons";
import { MobileMenu } from "./MobileMenu";
import { OverlayContainer } from "./styles/OverlayContainer";
import { ContactUsButton } from "@components/Buttons/ContactUsButton";

export const HeaderNavMenu: FC = () => {
  const [showMobileMenu, setMobileMenuVisible] = useState<boolean>(false);

  return (
    <HeaderNavContainer>
      <Logo />
      <div className="desktop-menu-container">
        <ul className="portfolio-nav-menu-links">
          <li>
            <Link href="#experience">EXPERIENCE</Link>
          </li>
          <li>
            <Link href="#skills">SKILLS</Link>
          </li>
          <li>
            <Link href="#blogs">BLOGS</Link>
          </li>
          <li>
            <Link href="#projects">PROJECTS</Link>
          </li>
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
            />
          </>
        )}
      </div>
    </HeaderNavContainer>
  );
};
