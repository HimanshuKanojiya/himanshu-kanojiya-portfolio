import { FC } from "react";
import Link from "next/link";

import { AiOutlineLinkedin } from "react-icons/ai";

import { LinkedInButtonContainer } from "./styles/ButtonsContainer";

export const LinkedInButton: FC = () => {
  return (
    <LinkedInButtonContainer>
      <Link
        href="https://www.linkedin.com/in/himanshukanojiya98/"
        target="_blank"
      >
        <AiOutlineLinkedin width={35} height={35} color="#2ff2f0" />
        Connect on LinkedIn
      </Link>
    </LinkedInButtonContainer>
  );
};
