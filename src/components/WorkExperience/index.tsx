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
      "Developed a UI for one of biggest Entertainment based business Platform (Malaysia based) where users can create their account, explore packs, add items to their cart, manage their billing, address, order & tracks new packs.",
      "Developed Employee benefits management system UI for One of biggest firm of USA for managing every benefit related scheme for employee.",
      "Implement best practices on the web app that comply with w3c accessibility standards to cover maximum audience.",
      "Implement best practices such as code splitting, lazy loading, react profiler (for Analysis) to optimized application performance",
      "Implemented React Testing Library, significantly reducing UI-related bugs by up to 90-95% through unit testing to have error-free user experience.",
      "Earned successive commendations from clients for consistently delivering exemplary work, underscoring commitment to exceptional UI development and client satisfaction.",
      "Enhanced web app performance by migrating React JS codebase to Next.js, resulting in a remarkable 100% improvement.",
    ],
  },
  {
    id: "NIVESNOIDASEO",
    role: "SEO Executive",
    organization: "Nivesh.com",
    from: "June 2018",
    to: "August 2021",
    linkText: "Checkout all Responsibilities",
    jobDescription: [
      "Enhanced & Maintained Website (including landing pages) using HTML, CSS & JavaScript in order to improve the website & landing pages user experience.",
      "Improved website search engine position (Google Ranking) from 0 to 100%.",
      "Audited website for technical SEO issues, and implemented solutions to enhance crawlability, indexability, and overall site performance.",
      "Collaborated with content creators to ensure that web content is optimized for search engines while maintaining high-quality and engaging user experiences.",
      "Optimized on-page elements including meta tags, headings, and content to improve organic search visibility and click-through rates.",
      "Built automation script using Python to collect advisors data through data scrapping in order to drop 2 to 3 days tasks to 30 minutes activity.",
    ],
  },
  {
    id: "INTELLINOIDATRAINING",
    role: "GPS Software Tester (Internship)",
    organization: "IntelliPlanner Software System India Pvt Ltd",
    from: "June 2016",
    to: "August 2016",
    linkText: "Checkout all Responsibilities",
    jobDescription: [
      "Conducted rigorous testing on GPS software to pinpoint and rectify bugs, ensuring enhanced functionality and reliability during vehicular use.",
      "Collaborated with the development team to analyze test results, providing valuable insights that led to bug fixes and optimizations, resulting in a smoother and more dependable GPS experience for vehicle users.",
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
