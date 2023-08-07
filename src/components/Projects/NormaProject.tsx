import { FC } from "react";
import Link from "next/link";

import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";

import { NormalProjectContainer } from "./styles/NormalProjectContainer";

export const NormalProject: FC<INormalProjectProps> = ({
  number,
  featuredLabelText,
}) => {
  return (
    <NormalProjectContainer>
      <div className="project-header">
        <p>{number < 9 ? `0${number + 1}.` : `${number + 1}.`}</p>
        <div className="line" />
        <p>{featuredLabelText}</p>
      </div>
      <div className="project-body">
        <h3>Amazon Web App Clone</h3>
        <p>
          An object is a data container, where the collection of properties save
          in key-value save in key-value
        </p>
      </div>
      <div className="project-footer">
        <Link href="/">
          <AiOutlineLink width="20px" height="20px" color="#dadaf2" />
          Visit the app
        </Link>
        <Link href="/">
          <AiOutlineGithub width="20px" height="20px" color="#dadaf2" />
          See the code
        </Link>
      </div>
    </NormalProjectContainer>
  );
};
