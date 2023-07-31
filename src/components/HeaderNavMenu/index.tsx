import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import headerNavMenuStyles from "./styles/headerNavMenu.module.css";
import { HeaderNavContainer } from "./styles/HeaderNavContainer";

import portfolioLogo from "@assets/images/portfolioLogo.svg";
import githubIcon from "@assets/images/github.svg";
import linkedinIcon from "@assets/images/linkedin.svg";
import email from "@assets/images/email.svg";
import emailDarkBlue from "@assets/images/emailDarkBlue.svg";

export const HeaderNavMenu: FC = () => {
  return (
    <HeaderNavContainer>
      <div className="portfolio-logo">
        <Image
          src={portfolioLogo}
          width={24}
          height={24}
          alt="himanshu kanojiya portfolio"
        />
        <strong>HIMANSHU KANOJIYA</strong>
      </div>
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
          <Link href="/">
            <Image src={githubIcon} width={30} height={30} alt="github link" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image
              src={linkedinIcon}
              width={35}
              height={35}
              alt="linkedIn link"
            />
          </Link>
        </li>
      </ul>
      <Link href="/" className="contact-us-button">
        <Image
          src={email}
          width={24}
          height={24}
          alt="connect with himanshu on email"
        />
        <Image
          src={emailDarkBlue}
          width={24}
          height={24}
          alt="connect with himanshu on email"
        />
        CONTACT US
      </Link>
    </HeaderNavContainer>
  );
};
