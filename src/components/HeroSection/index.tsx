import { FC } from "react";

import Image from "next/image";

import heroSectionStyles from "./styles/heroSection.module.css";
import { HeroSectionContainer } from "./styles/HeroSectionContainer";
import { MouseIcon } from "./MouseIcon";

import heroImage from "@assets/images/heroImage.png";

export const HeroSection: FC = () => {
  return (
    <HeroSectionContainer>
      <div className="info">
        <Image src={heroImage} width={295} height={329} alt="hero image" />
        <small>Transforming Ideas into Digital Realities</small>
        <h1 className="heading">
          Building Web <span> Applications that Exceed</span> Expectations
        </h1>
        <p className="description">
          I am frontend app developer with 2 years of experience. Currently
          working for Dynamics Monk Pvt Ltd, I specialize in crafting dynamic
          and user-friendly web applications.
        </p>
      </div>
      <MouseIcon />
    </HeroSectionContainer>
  );
};
