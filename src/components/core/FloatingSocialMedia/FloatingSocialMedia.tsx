import React from "react";
import { FloatingSocialMediaContainer } from "../../styles/FloatingSocialMedia/FloatingSocialMediaContainer";
import {
  GithubIcon,
  EmailIcon,
  LinkedInIcon,
} from "../../../assets/icons/iconsList";

export const FloatingSocialMedia: React.FC = () => {
  return (
    <FloatingSocialMediaContainer>
      <div className="socialIcons">
        <a href="/">
          <img src={GithubIcon} alt="github-social-link" />
        </a>
        <a href="/">
          <img src={EmailIcon} alt="email-social-link" />
        </a>
        <a href="/">
          <img src={LinkedInIcon} alt="linkedin-social-link" />
        </a>
      </div>
      <div className="verticalBorder" />
    </FloatingSocialMediaContainer>
  );
};
