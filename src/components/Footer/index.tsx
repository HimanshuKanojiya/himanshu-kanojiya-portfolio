import { FC } from "react";
import Image from "next/image";

import { FooterContainer } from "./styles/FooterContainer";
import { Logo } from "@components/Logo";

import copyrightIcon from "@assets/images/copyright.svg";

export const Footer: FC = () => {
  return (
    <FooterContainer>
      <Logo />
      <ul>
        <li>
          <Image src={copyrightIcon} width={20} height={20} alt="copyright" />
          <p>Copyright 2023</p>
        </li>
        <li>
          <div className="square-dot" />
        </li>
        <li>
          <p>
            <span>Design & Built by </span>Himanshu Kanojiya
          </p>
        </li>
        <li>
          <div className="square-dot" />
        </li>
        <li>
          <p>
            <span>ver 0.1 - 18/07/2023</span>
          </p>
        </li>
      </ul>
    </FooterContainer>
  );
};
