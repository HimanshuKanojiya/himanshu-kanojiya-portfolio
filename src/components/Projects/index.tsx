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
    id: "myastroweb0001",
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
      "It is an entertainment-based platform for postpaid users. Depending on their user category, users can register or sign in, purchase their preferred plans, pay service bills, explore packages, set up auto debit options, and even subscribe to internet plans.",
    techUsed: [
      {
        id: "SiRedux",
        value: "Redux & Redux Toolkit",
      },
    ],
  },
  {
    id: "mynjoiweb0002",
    title: "NJOI Web",
    subLabel: "Feauted Project",
    isFeatured: true,
    moreInfo: {
      codeLink: {
        value: "See the code",
        href: "/",
        show: false,
      },
      liveLink: {
        value: "Visit the app",
        href: "https://purchase.njoi.com.my/en-support",
        show: true,
      },
    },
    description:
      "The project focuses on an entertainment-based platform for prepaid users, where users can sign up for their preferred entertainment plans, explore available packages, purchase channels and movies, and add packs to their existing plans.",
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
          Discover the essence of my work through these Web Apps. Experience the
          embodiment of my dedication to clean design, performace, and a
          user-friendly interface that highlights my skills and projects
          effectively.
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
