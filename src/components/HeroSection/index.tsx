import { FC } from "react";

import Image from "next/image";

import { HeroSectionContainer } from "./styles/HeroSectionContainer";
import { MouseIcon } from "./MouseIcon";
import { LinkedInButton } from "@components/Buttons/LinkedInButton";

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
          I am a frontend web app developer with 2 years of experience in React
          JS & Next Js, along with 3 years of expertise in SEO. Currently at
          Dynamics Monk, where my focus lies in designing & developing dynamic &
          user-friendly web apps.
        </p>
      </div>

      <div className="hero-section-mobile-cta">
        <LinkedInButton />
      </div>

      <div className="hero-section-mouse-icon">
        <MouseIcon />
      </div>
    </HeroSectionContainer>
  );
};
