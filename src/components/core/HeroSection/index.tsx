import { FC } from "react";

import Image from "next/image";

import heroSectionStyles from "./styles/heroSection.module.css";
import { MouseIcon } from "./MouseIcon";

import heroImage from "@assets/images/heroImage.png";

export const HeroSection: FC = () => {
  return (
    <div className={heroSectionStyles.container}>
      <div className={heroSectionStyles.info}>
        <Image src={heroImage} width={295} height={329} alt="hero image" />
        <small>Transforming Ideas into Digital Realities</small>
        <h1 className={heroSectionStyles.heroHeading}>
          Building Web <span> Applications that Exceed</span> Expectations
        </h1>
        <p className={heroSectionStyles.description}>
          I am frontend app developer with 2 years of experience. Currently
          working for Dynamics Monk Pvt Ltd, I specialize in crafting dynamic
          and user-friendly web applications.
        </p>
      </div>
      <MouseIcon />
    </div>
  );
};
