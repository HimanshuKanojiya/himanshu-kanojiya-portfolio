import { FC } from "react";

import { SectionWrapper } from "../SectionWrapper";
import { ProjectsContainer } from "./styles/ProjectContainer";

import { Project } from "./Project";

export const Projects: FC = () => {
  return (
    <SectionWrapper title="PROJECTS, I HAVE WORKED ON">
      <ProjectsContainer>
        <p className="description">
          My name is Chase Ohlson. I’m a frontend software engineer & freelance
          web developer in Los Angeles -- with roots in digital marketing & SEO.
          I am passionate about music, technology and basically everything that
          makes the internet tick.
        </p>
        <Project />
        <Project />
      </ProjectsContainer>
    </SectionWrapper>
  );
};
