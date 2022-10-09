import React from "react";

import { ExperienceMenuContainer } from "../../styles/ExperienceSection/ExperienceMenuContainer";

export const ExperienceMenu: React.FC<IExperienceMenu> = ({
  Experience,
  showAboutThisCompany,
  currentSelectedCompany,
}) => {
  return (
    <ExperienceMenuContainer>
      <ul className="left-navigation-menu">
        {Experience.map((experience) => {
          return (
            <li
              key={experience.jobId}
              className={`company-list ${
                currentSelectedCompany === experience.jobId
                  ? "selected-company"
                  : ""
              }`}
            >
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
