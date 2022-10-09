import React from "react";

import { HeroSectionContainer } from "../../styles/HeroSection/HeroSectionContainer";
import { SocialIcons } from "../SocialIcons/SocialIcons";

import { useMediaQuery } from "../../../helper/useMediaQuery";

export const HeroSection: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 1336px)");

  return (
    <HeroSectionContainer>
      {!isDesktop && <SocialIcons className="social-icons" />}
      <div className="hero-content">
        <p className="content-secondary">FRONT-END REACT JS DEVELOPER __</p>
        <h1 className="content-heading">I AM HIMANSHU KANOJIYA</h1>
        <p className="content-description">
          A Passionate MERN Stack Software Developer. Having experience in
          building Websites using JavaScript, React JS, Next Js, Tailwind CSS,
          and Chakra UI.
        </p>
        <div className="content-cta">
          <button className="content-primary-action">HIRE NOW!</button>
          <a className="content-secondary-action" href="/">
            Download Resume
          </a>
        </div>
      </div>
    </HeroSectionContainer>
  );
};
