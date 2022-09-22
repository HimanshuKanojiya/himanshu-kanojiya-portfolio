import React from "react";
import { ExperienceContainer } from "../../styles/ExperienceSection/ExperienceContainer";
import { ExperienceCard } from "./ExperienceCard";
import Experiences from "../../../assets/jsons/experiences.json";

export const ExperienceSection: React.FC = () => {
  return (
    <ExperienceContainer>
      <h2 className="experienceTitle">{Experiences.title}</h2>
      <div className="experienceItems">
        {Experiences.experienceItems.map((Experience) => {
          return <ExperienceCard Experience={Experience} />;
        })}
      </div>
    </ExperienceContainer>
  );
};
