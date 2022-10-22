import React, { useEffect, useRef, useState } from "react";

import { ExperienceContainer } from "../../styles/ExperienceSection/ExperienceContainer";
import { ExperienceCard } from "./ExperienceCard";
import { ExperienceMenu } from "./ExperienceMenu";

import { useMediaQuery } from "../../../helper/useMediaQuery";

import Experiences from "../../../assets/jsons/experiences.json";

export const ExperienceSection: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 1336px)");
  const [experienceItems, setExperienceItems] = useState(
    Experiences.experienceItems
  );
  const selectedItemRef = useRef<string>("DMPTRJD06/21");

  const showAboutThisCompany = (jobId: string) => {
    selectedItemRef.current = jobId;

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
      <h2 className="experience-title">{Experiences.title}</h2>
      <div className="experience-section">
        {isDesktop && (
          <ExperienceMenu
            Experience={Experiences.experienceItems}
            showAboutThisCompany={showAboutThisCompany}
            currentSelectedCompany={selectedItemRef.current}
          />
        )}
        <div className="experience-items">
          {experienceItems.map((experience) => {
            return (
              <ExperienceCard key={experience.jobId} Experience={experience} />
            );
          })}
        </div>
      </div>
    </ExperienceContainer>
  );
};
