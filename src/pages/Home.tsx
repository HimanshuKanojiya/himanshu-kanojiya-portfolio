import React from "react";
import { NavBar } from "../components/core/NavBar/NavBar";
import { HeroSection } from "../components/core/HeroSection/HeroSection";

export const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
    </>
  );
};
