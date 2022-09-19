import React from "react";
import { ResponsibilityListContainer } from "../../styles/ExperienceSection/ResponsibilityListContainer";

export const ResponsibilityList: React.FC<IResponsibilityList> = ({
  title,
  responsibilites,
}) => {
  return (
    <ResponsibilityListContainer>
      <p>{title}</p>
      <ol className="responsibilitiesList">
        {responsibilites.map((responsibility, index) => {
          return <li key={index}>{responsibility}</li>;
        })}
      </ol>
    </ResponsibilityListContainer>
  );
};
