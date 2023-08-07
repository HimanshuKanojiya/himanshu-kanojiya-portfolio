import { FC } from "react";

import { AiOutlineLinkedin } from "react-icons/ai";

import { LinkedInButtonContainer } from "./styles/ButtonsContainer";

export const LinkedInButton: FC = () => {
  return (
    <LinkedInButtonContainer>
      <AiOutlineLinkedin width={35} height={35} color="#2ff2f0" />
      Connect on LinkedIn
    </LinkedInButtonContainer>
  );
};
