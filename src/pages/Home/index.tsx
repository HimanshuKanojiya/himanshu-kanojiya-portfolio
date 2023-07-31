"use client";

import { FC } from "react";

import { ThemeProvider } from "styled-components";

import { portfolioTheme } from "../../theme";

import { GlobalStyles } from "@components/GlobalStyles";
import { HeaderNavMenu } from "@components/HeaderNavMenu";
import { HeroSection } from "@components/HeroSection";
import { AboutMe } from "@components/AboutMe/AboutMe";
import { Work } from "@components/Work";
import { Projects } from "@components/Projects";

export const Home: FC = () => {
  return (
    <ThemeProvider theme={portfolioTheme}>
      <GlobalStyles>
        <HeaderNavMenu />
        <HeroSection />
        <AboutMe />
        <Work />
        <Projects />
      </GlobalStyles>
    </ThemeProvider>
  );
};
