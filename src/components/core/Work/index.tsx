"use client";

import { FC, useState, Children } from "react";

import { SectionWrapper } from "../SectionWrapper";
import workStyles from "./styles/work.module.css";

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
      <div className={workStyles.experience}>
        <div className={workStyles.navigationMenu}>
          {works.map((work, index) => {
            return (
              <div key={work.id} className={workStyles.menuItem}>
                <div className={workStyles.leftIcon}>
                  <div
                    className={`${workStyles.icon} ${
                      work.id === selectedWork.id ? workStyles.activeIcon : ""
                    }`}
                  ></div>
                  {index < works.length - 1 && (
                    <div className={workStyles.line}></div>
                  )}
                </div>
                <div className={workStyles.rightContent}>
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

        <div className={workStyles.aboutTheWork}>
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
      </div>
    </SectionWrapper>
  );
};
