import React, { useState } from "react";
import { ExperienceCardContainer } from "../../styles/ExperienceSection/ExperienceCardContainer";
import { getLogo } from "../../../helper/getLogo";
import { SkillsList } from "../SkillsList/SkillsList";
import { useMediaQuery } from "../../../helper/useMediaQuery";
import { ContentExtendButton } from "../Buttons/ContentExtendButton";

export const ExperienceCard: React.FC<IExperienceCard> = ({ Experience }) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width: 1336px)");

  return (
    <ExperienceCardContainer>
      <div key={Experience.jobId} className="experienceItem">
        <div className="companyDetails">
          <img
            src={getLogo(Experience.companyLogo as GetIcons)}
            alt={Experience.companyName}
          />
          <div className="aboutCompany">
            <h3 className="jobTitle">{Experience.jobTitle}</h3>
            <small className="companyName">
              {Experience.companyName}{" "}
              <span>
                (from {Experience.workingFrom} to {Experience.workingTo})
              </span>
            </small>
          </div>
        </div>
        <div className="responsibilities">
          <p>{Experience.description}</p>
          <ol className="responsibilitiesList">
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
