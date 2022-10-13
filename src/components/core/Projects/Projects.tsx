import React from "react";

import { ProjectsContainer } from "../../styles/Projects/ProjectsContainer";
import { ProjectsMobile } from "./ProjectsMobile";
import { ProjectsDesktop } from "./ProjectsDesktop";
import projectsData from "../../../assets/jsons/projects.json";

import { useMediaQuery } from "../../../helper/useMediaQuery";

export const Projects: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 1336px)");

  return (
    <ProjectsContainer>
      <div className="projects-top-section">
        <h2 className="projects-heading">{projectsData.title}</h2>
        <p className="projects-description">{projectsData.description}</p>
      </div>
      {!isDesktop && (
        <ProjectsMobile projectsData={projectsData.projectItems} />
      )}
      {isDesktop && (
        <ProjectsDesktop projectsData={projectsData.projectItems} />
      )}
    </ProjectsContainer>
  );
};
