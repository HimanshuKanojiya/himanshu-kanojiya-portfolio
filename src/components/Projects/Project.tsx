import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { GrReactjs } from "react-icons/gr";
import {
  SiStyledcomponents,
  SiRedux,
  SiJest,
  SiTypescript,
} from "react-icons/si";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

import { ProjectContainer } from "./styles/ProjectContainer";

import netflixCloneImage from "@assets/images/netflix-clone-using-vanilla.png";

export const Project: FC = () => {
  return (
    <ProjectContainer>
      <div className="project">
        <div className="left-column">
          <Image
            src={netflixCloneImage}
            width={732}
            height={341}
            alt="netflix clone"
          />
          <div className="image-overlay" />
        </div>

        <div className="right-column">
          <div className="project-titles">
            <strong>Featured Project</strong>
            <h3>Netflix Web App Clone</h3>
          </div>

          <p className="project-desc">
            Developed high quality UI for app as same as Figma & Zeplin & as
            same as Figma & Zeplin.
          </p>

          <ul className="tech-used-in-project">
            <li>
              <GrReactjs width={20} height={20} color="#dadaf2" />
              React JS
            </li>
            <li>
              <SiStyledcomponents width={20} height={20} color="#dadaf2" />
              Styled-Components
            </li>
            <li>
              <SiRedux width={20} height={20} color="#dadaf2" />
              Redux Toolkit
            </li>
            <li>
              <SiJest width={20} height={20} color="#dadaf2" />
              Jest
            </li>
            <li>
              <SiTypescript width={20} height={20} color="#dadaf2" />
              Typescript
            </li>
          </ul>

          <div className="code-links">
            <Link href="/">
              <AiOutlineGithub width={24} height={24} color="#dadaf2" />
            </Link>
            <Link href="/">
              <AiOutlineLink width={24} height={24} color="#dadaf2" />
            </Link>
          </div>
        </div>
      </div>
    </ProjectContainer>
  );
};
