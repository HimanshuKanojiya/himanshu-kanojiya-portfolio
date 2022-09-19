import React, { useState } from "react";
import { getLogo } from "../../../helper/getLogo";
import { ExperienceContainer } from "../../styles/ExperienceSection/ExperienceContainer";
import { ResponsibilityList } from "./ResponsibilityList";
import { SkillsList } from "../SkillsList/SkillsList";
import { ExpandIcon, ExpandLessIcon } from "../../../assets/icons/iconsList";
import Experiences from "../../../assets/jsons/experiences.json";

export const ExperienceSection: React.FC = () => {
  const [currentExperienceVisible, setExperienceVisible] = useState<string>("");

  const toggleExperience = (jobId: string) => {
    if (jobId !== currentExperienceVisible) return setExperienceVisible(jobId);
    setExperienceVisible("");
  };

  return (
    <ExperienceContainer>
      <h2 className="experienceTitle">{Experiences.title}</h2>
      <div className="experienceItems">
        {Experiences.experienceItems.map((Experience) => {
          return (
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
              {currentExperienceVisible === Experience.jobId && (
                <>
                  <ResponsibilityList
                    title={Experience.description}
                    responsibilites={Experience.responsibilites}
                  />

                  <SkillsList
                    title={Experience.skills.title}
                    skills={Experience.skills.skillsItems}
                  />
                </>
              )}
              <button
                className="seeMoreAboutThisJob"
                onClick={() => toggleExperience(Experience.jobId)}
                onKeyDown={() => toggleExperience(Experience.jobId)}
              >
                {currentExperienceVisible === Experience.jobId && (
                  <p>
                    See Less <img src={ExpandLessIcon} alt="See Less" />
                  </p>
                )}
                {currentExperienceVisible !== Experience.jobId && (
                  <p>
                    See More <img src={ExpandIcon} alt="See More" />
                  </p>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </ExperienceContainer>
  );
};
