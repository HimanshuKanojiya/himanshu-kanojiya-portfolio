import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { SocialIconsContainer } from "./styles/SocialIconsContainer";

import githubIcon from "@assets/images/github.svg";
import linkedinIcon from "@assets/images/linkedin.svg";

export const SocialIcons: FC<ISocialIcons> = ({ link, value, type }) => {
  switch (type) {
    case "email":
      return null;

    case "github":
      return (
        <SocialIconsContainer>
          <Link href={link}>
            <Image src={githubIcon} width={30} height={30} alt={value} />
          </Link>
        </SocialIconsContainer>
      );

    case "linkedIn":
      return (
        <SocialIconsContainer>
          <Link href={link}>
            <Image src={linkedinIcon} width={35} height={35} alt={value} />
          </Link>
        </SocialIconsContainer>
      );

    default:
      return null;
  }
};
