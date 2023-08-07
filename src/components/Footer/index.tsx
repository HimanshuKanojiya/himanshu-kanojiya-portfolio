import { FC } from "react";

import { FooterContainer } from "./styles/FooterContainer";
import { Logo } from "@components/Logo";

export const Footer: FC = () => {
  return (
    <FooterContainer>
      <Logo />
      <ul>
        <li>
          <p>Copyright 2023</p>
        </li>
        <li>
          <div className="square-dot" />
        </li>
        <li>
          <p>
            <span>Design & Coded</span> by Himanshu Kanojiya
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
