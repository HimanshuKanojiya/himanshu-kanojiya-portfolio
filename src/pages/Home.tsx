import React from "react";
import { NavBar } from "../components/core/NavBar/NavBar";
import { HeroSection } from "../components/core/HeroSection/HeroSection";
import { FloatingSocialMedia } from "../components/core/FloatingSocialMedia/FloatingSocialMedia";
import { useMediaQuery } from "../helper/useMediaQuery";

export const Home: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width: 1336px)");

  return (
    <>
      <NavBar />
      <HeroSection />
      {isDesktop && <FloatingSocialMedia />}
    </>
  );
};
