import { FC } from "react";
import Image from "next/image";

import { ContactContainer } from "./styles/ContactContainer";
import { LinkedInButton } from "@components/Buttons/LinkedInButton";

import contactImage from "@assets/images/contactImage.png";

export const Contact: FC = () => {
  return (
    <ContactContainer>
      <div className="contact-body">
        <Image src={contactImage} width={306} height={321} alt="hero image" />
        <h2>Let’s collaborate</h2>
        <p>
          My name is Chase Ohlson. I am a frontend software engineer & freelance
          web developer in Los Angeles -- with roots in digital marketing & SEO.
          I am passionate about music, technology and basically everything that
          makes the internet tick.
        </p>
        <LinkedInButton />
      </div>
    </ContactContainer>
  );
};
