import { FC } from "react";

import Image from "next/image";

import { SectionWrapper } from "../SectionWrapper";
import { AboutMeContainer } from "./styles/AboutMeContainer";

import frontEnd from "@assets/images/frontEnd.svg";
import uiDesigning from "@assets/images/uiDesigning.svg";
import testingTools from "@assets/images/testingTools.svg";

export const AboutMe: FC = () => {
  return (
    <SectionWrapper title="About Me" sectionId="aboutme">
      <AboutMeContainer>
        <div className="about-me">
          <p>
            Hello! I am Himanshu, a web app developer driven by a passion for
            crafting captivating digital experiences. My unique blend of design
            finesse and coding expertise results in user-friendly, responsive
            UIs that adapt seamlessly across devices and browsers. Collaborating
            closely with project designers, I ensure their visions become
            functional, aesthetically pleasing user interfaces, maintaining
            design consistency throughout the site.
          </p>
          <p>
            Adhering to industry best code practices & patterns, I create web
            solutions that harmoniously balance functionality and aesthetics.
            Apart the technical, I also have 3 years expertise in SEO which
            helps me to write the HTML in such a way that screen readers
            (improve accessbilities) & search engine understand what is the code
            about. Apart from the work, I love to play Soul based & open world
            PC games, reading & writing technical blogs, meditation.
          </p>
        </div>
        <div className="skills">
          <div>
            <Image src={frontEnd} width={61} height={61} alt="frontend" />
            <h3>Frontend</h3>
            <p>
              Creating captivating user interfaces with frontend technologies
              for seamless and engaging web experiences.
            </p>
            <ul>
              <li>HTML & CSS</li>
              <li>SASS & SCSS</li>
              <li>JavaScript</li>
              <li>Typescript</li>
              <li>React JS</li>
              <li>Next JS</li>
              <li>Webpack</li>
              <li>Micro frontend</li>
              <li>CSS Modules, CSS in JS, Tailwind CSS & Chakra UI</li>
              <li>Redux, Redux Toolkit & Tansack React Query</li>
            </ul>
          </div>

          <div>
            <Image
              src={testingTools}
              width={61}
              height={61}
              alt="Testing & Tools"
            />
            <h3>Testing & Tools</h3>
            <p>
              Ensuring frontend perfection through unit testing, guaranteeing
              flawless functionality and optimal user experience.
            </p>
            <ul>
              <li>Jest</li>
              <li>Enzyme</li>
              <li>Vitest</li>
              <li>React testing library</li>
            </ul>
          </div>

          <div>
            <Image
              src={uiDesigning}
              width={61}
              height={61}
              alt="UI Designing (Intermediate)"
            />
            <h3>Tools & Process</h3>
            <p>
              Using helpful tools and organized methods to make creating and
              launching front-end projects easier and more effective.
            </p>
            <ul>
              <li>Github & Gitlab</li>
              <li>Bitbucket</li>
              <li>Vercel</li>
              <li>Jira</li>
              <li>Agile & Scrum</li>
              <li>Webflow</li>
            </ul>
          </div>
        </div>
      </AboutMeContainer>
    </SectionWrapper>
  );
};
