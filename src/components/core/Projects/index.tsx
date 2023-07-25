import { FC } from "react";
import Image from "next/image";

import { SectionWrapper } from "../SectionWrapper";
import projectsStyles from "./styles/projects.module.css";

import netflixCloneImage from "@assets/images/netflix-clone-using-vanilla.png";

export const Projects: FC = () => {
  return (
    <SectionWrapper title="PROJECTS, I HAVE WORKED ON">
      <p className={projectsStyles.description}>
        My name is Chase Ohlson. I’m a frontend software engineer & freelance
        web developer in Los Angeles -- with roots in digital marketing & SEO. I
        am passionate about music, technology and basically everything that
        makes the internet tick.
      </p>
      <div className={projectsStyles.projects}>
        <div className={projectsStyles.project}>
          <div className={projectsStyles.projImage}>
            <Image
              src={netflixCloneImage}
              width={732}
              height={341}
              alt="netflix clone"
            />
            <div className={projectsStyles.imageLayout} />
          </div>
          <div className={projectsStyles.projInfo}>
            <h3>Netflix Web App Clone</h3>
            <p>
              Developed high quality UI for app as same as Figma & Zeplin & as
              same as Figma & Zeplin.
            </p>
            <ul>
              <li>React JS</li>
              <li>Styled-components</li>
              <li>Redux & Redux Toolkit</li>
              <li>Jest & React testing library</li>
            </ul>
          </div>
        </div>

        <div className={projectsStyles.project}>
          <div className={projectsStyles.projImage}>
            <Image
              src={netflixCloneImage}
              width={732}
              height={341}
              alt="netflix clone"
            />
            <div className={projectsStyles.imageLayout} />
          </div>
          <div className={projectsStyles.projInfo}>
            <h3>Netflix Web App Clone</h3>
            <p>
              Developed high quality UI for app as same as Figma & Zeplin & as
              same as Figma & Zeplin.
            </p>
            <ul>
              <li>React JS</li>
              <li>Styled-components</li>
              <li>Redux & Redux Toolkit</li>
              <li>Jest & React testing library</li>
            </ul>
          </div>
        </div>

        <div className={projectsStyles.project}>
          <div className={projectsStyles.projImage}>
            <Image
              src={netflixCloneImage}
              width={350}
              height={341}
              alt="netflix clone"
            />
            <div className={projectsStyles.imageLayout} />
          </div>
          <div className={projectsStyles.projInfo}>
            <h3>Netflix Web App Clone</h3>
            <p>
              Developed high quality UI for app as same as Figma & Zeplin & as
              same as Figma & Zeplin.
            </p>
            <ul>
              <li>React JS</li>
              <li>Styled-components</li>
              <li>Redux & Redux Toolkit</li>
              <li>Jest & React testing library</li>
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
