import React from "react";
import { ExperienceMenuContainer } from "../../styles/ExperienceSection/ExperienceMenuContainer";

export const ExperienceMenu: React.FC<IExperienceMenu> = ({
  Experience,
  showAboutThisCompany,
}) => {
  return (
    <ExperienceMenuContainer>
      <ul className="leftNavigationMenu">
        {Experience.map((experience) => {
          return (
            <li>
              <a
                href="/"
                onClick={(event) => {
                  event.preventDefault();
                  showAboutThisCompany(experience.jobId);
                }}
              >
                {experience.companyName}
              </a>
            </li>
          );
        })}
      </ul>
    </ExperienceMenuContainer>
  );
};
