import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { AiOutlineLink, AiOutlineGlobal } from "react-icons/ai";
import { SiRedux, SiStyledcomponents, SiReactrouter } from "react-icons/si";
import { FaReact } from "react-icons/fa";

import { SectionWrapper } from "@components/SectionWrapper";
import { ProjectsContainer } from "./styles/ProjectsContainer";

import projectDemoImage from "@assets/images/netflix-clone-using-vanilla.png";
import { FeatureProject } from "./FeatureProject";
import { NormalProject } from "./NormaProject";

const featuredProjectdata = [
  {
    id: "amazonClone0001",
    title: "Amazon Web App Clone",
    subLabel: "Feauted Project",
    isFeatured: true,
    moreInfo: {
      codeLink: {
        value: "See the code",
        href: "/",
        show: true,
      },
      liveLink: {
        value: "Visit the app",
        href: "/",
        show: true,
      },
    },
    description:
      "My name is Chase Ohlson. I am a frontend software engineer & freelance web developer in Los Angeles -- with roots in digital marketing & SEO. I am passionate about music, technology and basically everything that makes the internet tick.",
    techUsed: [
      {
        id: "SiRedux",
        value: "Redux & Redux Toolkit",
      },
    ],
  },
  {
    id: "myAstroWeb0002",
    title: "My Astro Web",
    subLabel: "Feauted Project",
    isFeatured: true,
    moreInfo: {
      codeLink: {
        value: "See the code",
        href: "/",
        show: true,
      },
      liveLink: {
        value: "Visit the app",
        href: "/",
        show: true,
      },
    },
    description:
      "My name is Chase Ohlson. I am a frontend software engineer & freelance web developer in Los Angeles -- with roots in digital marketing & SEO. I am passionate about music, technology and basically everything that makes the internet tick.",
    techUsed: [
      {
        id: "SiRedux",
        value: "Redux & Redux Toolkit",
      },
    ],
  },
];

export const Projects: FC = () => {
  return (
    <SectionWrapper title="MY PROJECTS" sectionId="projects">
      <ProjectsContainer>
        <p className="about-projects">
          My name is Chase Ohlson. I am a frontend software engineer & freelance
          web developer in Los Angeles -- with roots in digital marketing & SEO.
          I am passionate about music, technology and basically everything that
          makes the internet tick.
        </p>
        <ul className="featured-projects">
          {featuredProjectdata.map((project, index) => {
            return (
              <li key={project.id}>
                <FeatureProject
                  title={project.title}
                  number={index}
                  featuredLabelText={project.subLabel}
                  description={project.description}
                  image={projectDemoImage}
                  techUsed={project.techUsed}
                  moreInfo={project.moreInfo}
                  className={(index + 1) % 2 === 0 ? "reverse-column" : ""}
                />
              </li>
            );
          })}
        </ul>
        <ul className="other-projects">
          <NormalProject number={0} featuredLabelText="Based on React Js" />
          <NormalProject number={1} featuredLabelText="Based on React Js" />
          <NormalProject number={2} featuredLabelText="Based on React Js" />
          <NormalProject number={3} featuredLabelText="Based on React Js" />
          <NormalProject number={4} featuredLabelText="Based on React Js" />
          <NormalProject number={5} featuredLabelText="Based on React Js" />
          <NormalProject number={6} featuredLabelText="Based on React Js" />
        </ul>
      </ProjectsContainer>
    </SectionWrapper>
  );
};
