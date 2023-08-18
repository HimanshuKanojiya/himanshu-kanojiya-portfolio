import { FC } from "react";
import Image from "next/image";

import { ContactUsButtonContainer } from "./styles/ButtonsContainer";

import email from "@assets/images/email.svg";
import emailDarkBlue from "@assets/images/emailDarkBlue.svg";

export const ContactUsButton: FC = () => {
  return (
    <ContactUsButtonContainer
      href="mailto:himanshukanojiya825@gmail.com"
      className="contact-us-button"
      target="_blank"
    >
      <Image
        src={email}
        width={24}
        height={24}
        alt="connect with himanshu on email"
      />
      <Image
        src={emailDarkBlue}
        width={24}
        height={24}
        alt="connect with himanshu on email"
      />
      <p>CONTACT US</p>
    </ContactUsButtonContainer>
  );
};
