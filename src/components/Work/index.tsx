"use client";

import { FC, useState, Children } from "react";

import { SectionWrapper } from "../SectionWrapper";
import { WorkContainer } from "./styles/WorkContainer";

import { works } from "@assets/jsons/work.json";

export const Work: FC = () => {
  const [selectedWork, setSelectedWork] = useState<IWork>(
    () => works.at(0) as IWork
  );

  const onClickToLoadWorkInfo = (workId: string) => {
    const work = works.filter((work) => work.id === workId).at(0);
    setSelectedWork(work as IWork);
  };

  return (
    <SectionWrapper title="MY WORK EXPERIENCES">
      <WorkContainer>
        <div className="navigation-menu">
          {works.map((work, index) => {
            return (
              <div key={work.id} className="menu-item">
                <div className="left-icon">
                  <div
                    className={`icon ${
                      work.id === selectedWork.id ? "active-icon" : ""
                    }`}
                  ></div>
                  {index < works.length - 1 && <div className="line" />}
                </div>
                <div className="right-content">
                  <h3>{work.role}</h3>
                  <small>
                    {work.organization} ({work.from} to {work.to})
                  </small>
                  <button onClick={() => onClickToLoadWorkInfo(work.id)}>
                    {work.linkText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="about-the-work">
          {Children.toArray(
            selectedWork.jobDescription.map((job) => {
              if (job.type === "paragraph") return <p>{job.value}</p>;
              return (
                <ul>
                  {Children.toArray(job.items.map((item) => <li>{item}</li>))}
                </ul>
              );
            })
          )}
        </div>
      </WorkContainer>
    </SectionWrapper>
  );
};
