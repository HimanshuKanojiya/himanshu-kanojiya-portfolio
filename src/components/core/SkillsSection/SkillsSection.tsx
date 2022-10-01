import React from "react";
import { SkillCard } from "./SkillCard";
import skills from "../../../assets/jsons/skills.json";
import { SkillsSectionContainer } from "../../styles/SkillsSection/SkillsSectionContainer";

export const SkillsSection: React.FC = () => {
  return (
    <SkillsSectionContainer>
      <h2 className="skillTitle">{skills.title}</h2>
      <div className="skillsList">
        {skills.skillItems.map((skill) => {
          return (
            <SkillCard
              key={skill.skillId}
              skillLogo={skill.skillLogo}
              skillTitle={skill.skillTitle}
              skillDescription={skill.skillDescription}
              skillsItems={skill.skillsItems}
            />
          );
        })}
      </div>
    </SkillsSectionContainer>
  );
};
