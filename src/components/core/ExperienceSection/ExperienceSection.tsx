import React, { useEffect, useState } from "react";
import { ExperienceContainer } from "../../styles/ExperienceSection/ExperienceContainer";
import { ExperienceCard } from "./ExperienceCard";
import { useMediaQuery } from "../../../helper/useMediaQuery";
import { ExperienceMenu } from "./ExperienceMenu";
import Experiences from "../../../assets/jsons/experiences.json";

export const ExperienceSection: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 1336px)");
  const [experienceItems, setExperienceItems] = useState(
    Experiences.experienceItems
  );

  const showAboutThisCompany = (jobId: string) => {
    setExperienceItems(() => {
      return Experiences.experienceItems.filter(
        (experience) => experience.jobId === jobId
      );
    });
  };

  useEffect(() => {
    if (!isDesktop) return;
    showAboutThisCompany("DMPTRJD06/21");
  }, [isDesktop]);

  return (
    <ExperienceContainer>
      <h2 className="experienceTitle">{Experiences.title}</h2>
      <div className="experienceSection">
        {isDesktop && (
          <ExperienceMenu
            Experience={Experiences.experienceItems}
            showAboutThisCompany={showAboutThisCompany}
          />
        )}
        <div className="experienceItems">
          {experienceItems.map((experience) => {
            return <ExperienceCard Experience={experience} />;
          })}
        </div>
      </div>
    </ExperienceContainer>
  );
};
