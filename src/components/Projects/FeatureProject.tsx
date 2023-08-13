import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";

import { FeatureProjectContainer } from "./styles/FeatureProjectContainer";
import { GetTechWithIcon } from "@components/GetTechWithIcon";

export const FeatureProject: FC<IFeatureProjectProps> = ({
  number,
  featuredLabelText,
  title,
  moreInfo,
  description,
  techUsed,
  image,
  className,
}) => {
  return (
    <FeatureProjectContainer className={className}>
      <div className="project-left-column">
        <div className="project-number">
          <p>{number < 9 ? `0${number + 1}.` : `${number + 1}.`}</p>
          <div className="line" />
          <p>{featuredLabelText}</p>
        </div>

        <div className="project-header">
          <h3>{title}</h3>
          <span className="links-to-project">
            {moreInfo.liveLink.show && (
              <Link href={moreInfo.liveLink.href} target="_blank">
                <AiOutlineLink width="20px" height="20px" color="#dadaf2" />
                <p>{moreInfo.liveLink.value}</p>
              </Link>
            )}
            {moreInfo.codeLink.show && (
              <Link href={moreInfo.codeLink.href} target="_blank">
                <AiOutlineGithub width="20px" height="20px" color="#dadaf2" />
                <p>{moreInfo.codeLink.value}</p>
              </Link>
            )}
          </span>
        </div>

        <div className="project-body">
          <p>{description}</p>
        </div>
        <ul className="project-footer">
          {techUsed.map((tech) => {
            return (
              <li key={tech.id}>
                <GetTechWithIcon
                  type={tech.id as techTypes}
                  text={tech.value}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <Image
        src={image}
        width={473}
        height={260}
        alt={title}
        className="project-right-column"
      />
    </FeatureProjectContainer>
  );
};
