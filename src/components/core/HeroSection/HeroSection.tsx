import React from "react";
import { HeroSectionContainer } from "../../styles/HeroSection/HeroSectionContainer";
import { useMediaQuery } from "../../../helper/useMediaQuery";
import { SocialIcons } from "../SocialIcons/SocialIcons";

export const HeroSection: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 1336px)");

  return (
    <HeroSectionContainer>
      {!isDesktop && <SocialIcons className="socialIcons" />}
      <div className="heroContent">
        <p className="contentSecondary">FRONT-END REACT JS DEVELOPER __</p>
        <h1 className="contentHeading">I AM HIMANSHU KANOJIYA</h1>
        <p className="contentDescription">
          A Passionate MERN Stack Software Developer. Having experience in
          building Websites using JavaScript, React JS, Next Js, Tailwind CSS,
          and Chakra UI.
        </p>
        <div className="contentCTA">
          <button className="contentPrimaryAction">HIRE NOW!</button>
          <a className="contentSecondaryAction" href="/">
            Download Resume
          </a>
        </div>
      </div>
    </HeroSectionContainer>
  );
};
