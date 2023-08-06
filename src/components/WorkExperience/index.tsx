import { FC, Children, useState } from "react";

import { SectionWrapper } from "@components/SectionWrapper";
import { WorkExperienceContainer } from "./styles/WorkExperienceContainer";

import { works } from "@assets/jsons/work.json";

export const WorkExperience: FC = () => {
  const [selectedWorkExperience, setSelectedWorkExperience] = useState<string>(
    () => works.at(0)?.id || ""
  );

  const onClickToSelectExperience = (id: string) => {
    setSelectedWorkExperience(id);
  };

  return (
    <SectionWrapper title="MY WORK EXPERIENCES">
      <WorkExperienceContainer>
        <nav className="experience-navigation">
          <ul>
            {Children.toArray(
              works.map((work) => (
                <li
                  role="button"
                  className={
                    selectedWorkExperience === work.id
                      ? "selected-experience"
                      : ""
                  }
                  onClick={() => onClickToSelectExperience(work.id)}
                >
                  {work.organization}
                </li>
              ))
            )}
          </ul>
        </nav>
        <div className="about-experience">
          {selectedWorkExperience && (
            <>
              {works.map((work) => {
                if (work.id !== selectedWorkExperience) return null;

                return (
                  <>
                    <div className="about-experience-header">
                      <h3>{work.role}</h3>
                      <small>
                        From {work.from} to {work.to}
                      </small>
                    </div>
                    <ul className="responsibilites-and-work">
                      {Children.toArray(
                        work.jobDescription.map((responsibility) => {
                          return <li>{responsibility}</li>;
                        })
                      )}
                    </ul>
                  </>
                );
              })}
            </>
          )}
        </div>
      </WorkExperienceContainer>
    </SectionWrapper>
  );
};
