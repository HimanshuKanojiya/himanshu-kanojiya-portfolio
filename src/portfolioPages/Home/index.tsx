"use client";

import { FC } from "react";

import { ThemeProvider } from "styled-components";

import { portfolioTheme } from "../../theme";

import { GlobalStyles } from "@components/GlobalStyles";
import { HeaderNavMenu } from "@components/HeaderNavMenu";
import { HeroSection } from "@components/HeroSection";
import { AboutMe } from "@components/AboutMe/AboutMe";
import { WorkExperience } from "@components/WorkExperience";
import { Projects } from "@components/Projects";
import { Blogs } from "@components/Blogs";
import { Contact } from "@components/Contact";
import { Footer } from "@components/Footer";

export const Home: FC = () => {
  return (
    <ThemeProvider theme={portfolioTheme}>
      <GlobalStyles>
        <HeaderNavMenu />
        <HeroSection />
        <AboutMe />
        <WorkExperience />
        {/* <Projects /> */}
        <Blogs />
        <Contact />
        <Footer />
      </GlobalStyles>
    </ThemeProvider>
  );
};
