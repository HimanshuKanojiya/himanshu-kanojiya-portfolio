import { FC, Children, useState } from "react";

import { SectionWrapper } from "@components/SectionWrapper";
import { WorkExperienceContainer } from "./styles/WorkExperienceContainer";

const works = [
  {
    id: "DMDELHIREACTJS",
    role: "Frontend React JS Developer",
    organization: "Dynamics Monk Pvt Ltd",
    from: "May 2021",
    to: "Present",
    linkText: "Checkout all Responsibilities",
    jobDescription: [
      "Developed high quality UI for app as same as Figma & Zeplin designs in order to produce high qualiy apps.",
      "Developed web applications with SEO & w3c accessibility standards and increased SERP from 0% to 100%.",
      "Trained & mentored new joineers for projects to have a smooth onboarding process.",
    ],
  },
  {
    id: "NIVESNOIDASEO",
    role: "SEO Executive",
    organization: "Nivesh Advisory Pvt Ltd",
    from: "May 2021",
    to: "Present",
    linkText: "Checkout all Responsibilities",
    jobDescription: [
      "Developed high quality UI for app as same as Figma & Zeplin designs in order to produce high qualiy apps.",
      "Developed web applications with SEO & w3c accessibility standards and increased SERP from 0% to 100%.",
      "Trained & mentored new joineers for projects to have a smooth onboarding process.",
    ],
  },
  {
    id: "INTELLINOIDATRAINING",
    role: "GPS Testing Trainee",
    organization: "GPS Intelliplanner Pvt Ltd",
    from: "May 2021",
    to: "Present",
    linkText: "Checkout all Responsibilities",
    jobDescription: [
      "Developed high quality UI for app as same as Figma & Zeplin designs in order to produce high qualiy apps.",
      "Developed web applications with SEO & w3c accessibility standards and increased SERP from 0% to 100%.",
      "Trained & mentored new joineers for projects to have a smooth onboarding process.",
    ],
  },
];

export const WorkExperience: FC = () => {
  const [selectedWorkExperience, setSelectedWorkExperience] = useState<string>(
    () => works.at(0)?.id || ""
  );

  const onClickToSelectExperience = (id: string) => {
    setSelectedWorkExperience(id);
  };

  return (
    <SectionWrapper title="MY WORK EXPERIENCES" sectionId="experience">
      <WorkExperienceContainer>
        <nav className="experience-navigation" id="experience">
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
              {Children.toArray(
                works.map((work) => {
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
                })
              )}
            </>
          )}
        </div>
      </WorkExperienceContainer>
    </SectionWrapper>
  );
};
