import React from "react";

import { ProjectsDesktopContainer } from "../../styles/Projects/ProjectsDesktopContainer";

export const ProjectsDesktop: React.FC<IProjectsItems> = ({ projectsData }) => {
  return (
    <ProjectsDesktopContainer>
      <div className="projects-list">
        {projectsData.map((projectData) => {
          if (projectData.isProjectFeatured)
            return <p>{projectData.projectDescription}</p>;
          return <h3>{projectData.projectTitle}</h3>;
        })}
      </div>
    </ProjectsDesktopContainer>
  );
};
