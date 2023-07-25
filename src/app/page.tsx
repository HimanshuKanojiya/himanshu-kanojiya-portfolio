import homePageStyles from "@components/styles/home/home.module.css";

import { HeaderNavMenu } from "@components/core/HeaderNavMenu";
import { HeroSection } from "@components/core/HeroSection";
import { AboutMe } from "@components/core/AboutMe/AboutMe";
import { Work } from "@components/core/Work";
import { Projects } from "@components/core/Projects";

export default function Home() {
  return (
    <main className={homePageStyles.container}>
      <HeaderNavMenu />
      <HeroSection />
      <AboutMe />
      <Work />
      <Projects />
    </main>
  );
}
