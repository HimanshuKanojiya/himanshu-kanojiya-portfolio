import React from "react";
import { SkillsListContainer } from "../../styles/SkillsList/SkillsListContainer";
import { getLogo } from "../../../helper/getLogo";

export const SkillsList: React.FC<ISkillsList> = ({ title, skills }) => {
  return (
    <SkillsListContainer>
      <strong>{title}</strong>
      <ul>
        {skills.map((skill) => {
          return (
            <li key={skill.name}>
              <img src={getLogo(skill.iconName as GetIcons)} alt={skill.name} />
              <p>{skill.name}</p>
            </li>
          );
        })}
      </ul>
    </SkillsListContainer>
  );
};
