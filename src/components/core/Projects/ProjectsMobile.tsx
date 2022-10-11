import React, { useState } from "react";

import { ProjectsMobileContainer } from "../../styles/Projects/ProjectsMobileContainer";
import { ContentExtendButton } from "../Buttons/ContentExtendButton";

import { getLogo } from "../../../helper/getLogo";

export const ProjectsMobile: React.FC<IProjectsMobile> = ({ projectsData }) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <ProjectsMobileContainer>
      <div className="projects-list">
        {projectsData.map((projectData) => {
          return (
            <div key={projectData.projectId} className="project">
              <img
                src={getLogo(projectData.projectImage as GetIcons)}
                alt={projectData.projectTitle}
                className="project-image"
              />
              <img
                src={getLogo(projectData.projectLogo as GetIcons)}
                alt={projectData.projectTitle}
                className="project-logo"
              />
              <h3 className="project-title">{projectData.projectTitle}</h3>
              <p
                className={`project-description ${
                  !showMore ? "project-hide-full-content" : ""
                }`}
              >
                {projectData.projectDescription}
              </p>
              {showMore && (
                <>
                  <h4 className="project-technology">
                    {projectData.technologyUsedTitle}
                  </h4>
                  <ul className="project-used-technologies">
                    {projectData.usedTechnologies.map((usedTechnology) => {
                      return (
                        <li key={usedTechnology.name}>
                          <img
                            src={getLogo(usedTechnology.iconName as GetIcons)}
                            alt={usedTechnology.name}
                          />
                          <p>{usedTechnology.name}</p>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="project-links">
                    <a href="/">
                      {projectData.projectLiveTitle}{" "}
                      <img
                        src={getLogo(projectData.projectLiveIcon as GetIcons)}
                        alt={projectData.projectLiveTitle}
                      />
                    </a>
                    <a href="/">
                      {projectData.projectRepositoryTitle}{" "}
                      <img
                        src={getLogo(
                          projectData.projectRepositoryIcon as GetIcons
                        )}
                        alt={projectData.projectRepositoryTitle}
                      />
                    </a>
                  </div>
                </>
              )}
              <ContentExtendButton
                showMore={showMore}
                handleShowMore={() => setShowMore((prevState) => !prevState)}
              />
            </div>
          );
        })}
      </div>
    </ProjectsMobileContainer>
  );
};
