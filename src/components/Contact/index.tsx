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
        <h2>Exploring New Opportunities!</h2>
        <p>
          I enjoy creating web apps and I am ready for new challenges in a
          different environment. Lets connect on LinkedIn to chat about how I
          can contribute to your team. Just drop me a message on LinkedIn, and I
          will be sure to reply!
        </p>
        <LinkedInButton />
      </div>
    </ContactContainer>
  );
};
