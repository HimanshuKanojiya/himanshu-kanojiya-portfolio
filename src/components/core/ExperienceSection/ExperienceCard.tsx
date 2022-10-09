import React, { useState } from "react";

import { ExperienceCardContainer } from "../../styles/ExperienceSection/ExperienceCardContainer";
import { SkillsList } from "../SkillsList/SkillsList";
import { ContentExtendButton } from "../Buttons/ContentExtendButton";

import { getLogo } from "../../../helper/getLogo";
import { useMediaQuery } from "../../../helper/useMediaQuery";

export const ExperienceCard: React.FC<IExperienceCard> = ({ Experience }) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width: 1336px)");

  return (
    <ExperienceCardContainer>
      <div key={Experience.jobId} className="experience-item">
        <div className="company-details">
          <img
            src={getLogo(Experience.companyLogo as GetIcons)}
            alt={Experience.companyName}
          />
          <div className="about-company">
            <h3 className="job-title">{Experience.jobTitle}</h3>
            <small className="company-name">
              {Experience.companyName}{" "}
              <span>
                (from {Experience.workingFrom} to {Experience.workingTo})
              </span>
            </small>
          </div>
        </div>
        <div className="responsibilities">
          <p>{Experience.description}</p>
          <ol className="responsibilities-list">
            <li>{Experience.responsibilites[0]}</li>
            {showMore &&
              Experience.responsibilites.map((responsibility, index) => {
                return index !== 0 && <li key={index}>{responsibility}</li>;
              })}

            {isDesktop &&
              Experience.responsibilites.map((responsibility, index) => {
                return index !== 0 && <li key={index}>{responsibility}</li>;
              })}
          </ol>
        </div>
        {showMore && (
          <SkillsList
            title={Experience.skills.title}
            skills={Experience.skills.skillsItems}
          />
        )}
        {isDesktop && (
          <SkillsList
            title={Experience.skills.title}
            skills={Experience.skills.skillsItems}
          />
        )}
        <ContentExtendButton
          handleShowMore={() => setShowMore((prevState) => !prevState)}
          showMore={showMore}
          isDesktop={isDesktop}
        />
      </div>
    </ExperienceCardContainer>
  );
};
