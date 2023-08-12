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
          Ready to work together? With a solid 2-year foundation in React and
          Next.js, coupled with 3 years mastering SEO, I am primed to enhance
          your projects. Lets collaborate for impactful web solutions that drive
          results. Hire me today to make your vision a reality.
        </p>
        <LinkedInButton />
      </div>
    </ContactContainer>
  );
};
