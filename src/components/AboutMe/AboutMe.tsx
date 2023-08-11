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
            Greetings, I am Himanshu Kanojiya, a frontend web app developer
            based in Noida, India. With 2 years of experience in React JS & Next
            JS, and 3 years in SEO, I am currently contributing my skills at
            Dynamics Monk Pvt Ltd. My expertise centers around crafting dynamic,
            user-friendly web apps.
          </p>
          <p>
            My work currently consists of a full time engineering role at The
            Noun Project (working on Lingo) & managing ongoing freelance clients
            and side projects. I find this balancing act to be super resourceful
            in terms my learning as a web developer, as well as for keeping up
            with the rapid expansion of developer tools, libraries, frameworks,
            etc.
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
              src={uiDesigning}
              width={61}
              height={61}
              alt="UI Designing (Intermediate)"
            />
            <h3>UI Designing (Intermediate)</h3>
            <p>
              Combining frontend powers with a keen eye for aesthetics to craft
              visually stunning and user-centric interfaces.
            </p>
            <ul>
              <li>Figma</li>
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
            <h3>Tools</h3>
            <ul>
              <li>Github & Gitlab</li>
              <li>Bitbucket</li>
              <li>Vercel</li>
            </ul>
          </div>
        </div>
      </AboutMeContainer>
    </SectionWrapper>
  );
};