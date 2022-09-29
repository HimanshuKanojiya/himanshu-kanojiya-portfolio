import React from "react";
import { createPortal } from "react-dom";
import { NavBar } from "../components/core/NavBar/NavBar";
import { HeroSection } from "../components/core/HeroSection/HeroSection";
import { FloatingSocialMedia } from "../components/core/FloatingSocialMedia/FloatingSocialMedia";
import { ExperienceSection } from "../components/core/ExperienceSection/ExperienceSection";
import { SkillsSection } from "../components/core/SkillsSection/SkillsSection";
//import { Footer } from "../components/core/Footer/Footer";
import { useMediaQuery } from "../helper/useMediaQuery";

export const Home: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 1336px)");

  return (
    <>
      <NavBar />
      <HeroSection />
      {isDesktop &&
        createPortal(
          <FloatingSocialMedia />,
          document.getElementById("hanging-sm-icon") as HTMLElement
        )}
      <ExperienceSection />
      <SkillsSection />
      {/* <Footer /> */}
    </>
  );
};
