import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { AiOutlineLink, AiOutlineGlobal } from "react-icons/ai";
import { SiRedux, SiStyledcomponents, SiReactrouter } from "react-icons/si";
import { FaReact } from "react-icons/fa";

import { SectionWrapper } from "@components/SectionWrapper";
import { ProjectsContainer } from "./styles/ProjectsContainer";

import projectDemoImage from "@assets/images/netflix-clone-using-vanilla.png";

const data = [
  {
    id: "amazonClone0001",
    title: "Amazon Web App Clone",
    subLabel: "Feauted Project",
    moreInfo: {
      codeRepository: {
        value: "See the code",
        link: "/",
      },
      live: {
        value: "Visit the app",
        link: "/",
      },
      showLive: true,
      showCode: true,
    },
    description:
      "My name is Chase Ohlson. I am a frontend software engineer & freelance web developer in Los Angeles -- with roots in digital marketing & SEO. I am passionate about music, technology and basically everything that makes the internet tick.",
    techUsed: [
      {
        techId: "SiRedux",
        value: "Redux & Redux Toolkit",
      },
    ],
  },
  {
    id: "myAstroWeb0002",
    title: "My Astro Web",
    subLabel: "Feauted Project",
    moreInfo: {
      codeRepository: {
        value: "See the code",
        link: "/",
      },
      live: {
        value: "Visit the app",
        link: "/",
      },
      showLive: true,
      showCode: true,
    },
    description:
      "My name is Chase Ohlson. I am a frontend software engineer & freelance web developer in Los Angeles -- with roots in digital marketing & SEO. I am passionate about music, technology and basically everything that makes the internet tick.",
    techUsed: [
      {
        techId: "SiRedux",
        value: "Redux & Redux Toolkit",
      },
    ],
  },
];

export const Projects: FC = () => {
  return (
    <SectionWrapper title="MY PROJECTS">
      <ProjectsContainer>
        <p className="about-projects">
          My name is Chase Ohlson. I am a frontend software engineer & freelance
          web developer in Los Angeles -- with roots in digital marketing & SEO.
          I am passionate about music, technology and basically everything that
          makes the internet tick.
        </p>
        <ul className="projects">
          {data.map((project, index) => {
            return (
              <li key={project.id} className="project">
                <div className="project-left-column">
                  <div className="project-number">
                    <p>{index < 9 ? `0${index + 1}.` : `${index + 1}.`}</p>
                    <div className="line" />
                    <p>{project.subLabel}</p>
                  </div>
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <span className="links-to-project">
                      {project.moreInfo.showLive && (
                        <Link href={project.moreInfo.live.link}>
                          <AiOutlineLink
                            width="20px"
                            height="20px"
                            color="#dadaf2"
                          />
                          <p>{project.moreInfo.live.value}</p>
                        </Link>
                      )}
                      {project.moreInfo.showCode && (
                        <Link href={project.moreInfo.codeRepository.link}>
                          <AiOutlineGlobal
                            width="20px"
                            height="20px"
                            color="#dadaf2"
                          />
                          <p>{project.moreInfo.codeRepository.value}</p>
                        </Link>
                      )}
                    </span>
                  </div>
                  <div className="project-body">
                    <p>{project.description}</p>
                  </div>
                  <ul className="project-footer">
                    {project.techUsed.map((tech) => {
                      return (
                        <li key={tech.techId}>
                          <SiRedux width="20px" height="20px" color="#dadaf2" />
                          Redux & Redux Toolkit
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <Image
                  src={projectDemoImage}
                  width={473}
                  height={260}
                  alt="demo iamge"
                  className="project-right-column"
                />
              </li>
            );
          })}
        </ul>
      </ProjectsContainer>
    </SectionWrapper>
  );
};
