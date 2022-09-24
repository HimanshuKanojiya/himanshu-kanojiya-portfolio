import React, { useState } from "react";
import { ExperienceCardContainer } from "../../styles/ExperienceSection/ExperienceCardContainer";
import { getLogo } from "../../../helper/getLogo";
import { SkillsList } from "../SkillsList/SkillsList";
import { useMediaQuery } from "../../../helper/useMediaQuery";
import { ExpandIcon, ExpandLessIcon } from "../../../assets/icons/iconsList";

export const ExperienceCard: React.FC<IExperienceCard> = ({ Experience }) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width: 1336px)");

  return (
    <ExperienceCardContainer>
      <div key={Experience.jobId} className="experienceItem">
        <img
          src={getLogo(Experience.companyLogo as GetIcons)}
          alt={Experience.companyName}
        />
        <h3 className="jobTitle">{Experience.jobTitle}</h3>
        <small className="companyName">
          {Experience.companyName}{" "}
          <span>
            (from {Experience.workingFrom} to {Experience.workingTo})
          </span>
        </small>
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
        <button
          className="seeMoreAboutThisJob"
          onClick={() => setShowMore((prevState) => !prevState)}
          onKeyDown={() => setShowMore((prevState) => !prevState)}
        >
          {showMore && !isDesktop && (
            <p>
              See Less <img src={ExpandLessIcon} alt="See Less" />
            </p>
          )}

          {!showMore && !isDesktop && (
            <p>
              See More <img src={ExpandIcon} alt="See More" />
            </p>
          )}
        </button>
      </div>
    </ExperienceCardContainer>
  );
};
