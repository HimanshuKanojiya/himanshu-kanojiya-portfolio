import React from "react";

import { SkillsSectionContainer } from "../../styles/SkillsSection/SkillsSectionContainer";
import { SkillCard } from "./SkillCard";

import skills from "../../../assets/jsons/skills.json";

export const SkillsSection: React.FC = () => {
  return (
    <SkillsSectionContainer>
      <h2 className="skill-title">{skills.title}</h2>
      <div className="skills-list">
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
